import { useEffect } from "react";
import {useForm} from "react-hook-form";
import './styles/FormUsers.css'
const FormUser = ({ 
  createNewUser, 
  updateInfo, 
  updateUserById, 
  setUpdateInfo, 
  closeForm,
  setCloseForm
}) => {

    
    const {  register, reset, handleSubmit } = useForm ()

    useEffect (() => {
      reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
      if(updateInfo) {
      //update
      updateUserById('/users', updateInfo.id, data)
      setUpdateInfo()
      }else {
        createNewUser ('/users', data)
        }
        reset({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          birthday: ''
        })
      }
      const handleCloseForm = () => {
        setCloseForm(true)
      }

    return (
  <div onClick={handleCloseForm} className= {`formuser-container ${closeForm && 'close-form'}`}>
    <form onClick={e => e.stopPropagation ()} className= "formuser" onSubmit={handleSubmit(submit)}>
        <h2 className= "formuser__title">{updateInfo ? 'Update' : 'Insert New User'}</h2>
        <div onClick={handleCloseForm} className="formuser__close">X</div>
        <div className= "formuser__group">
            <label className= "formuser__label" htmlFor="first_name">First Name: </label>
            <input  className= "formuser__input"{...register('first_name')} type="text" id="first_name" placeholder="Please insert Name" required />
        </div>
        <div className= "formuser__group">
            <label className= "formuser__label" htmlFor="last_name">Last Name: </label>
            <input  className= "formuser__input"{...register('last_name')} type="text" id="last_name" />
        </div>
        <div className= "formuser__group">
            <label className= "formuser__label" htmlFor="email">Email: </label>
            <input className= "formuser__input" {...register('email')} type="email" id="email" placeholder="example@email.com" />
        </div>
        <div className= "formuser__group">
            <label className= "formuser__label" htmlFor="password">Password: </label>
            <input className= "formuser__input" {...register('password')} type="password" id="password" placeholder="Insert password" required />
        </div>
        <div className= "formuser__group">
            <label className= "formuser__label" htmlFor="birthday">Birthday: </label>
            <input className= "formuser__input" {...register('birthday')} type="date" id="birthday" />
        </div>
        <button className= "formuser__btn">{updateInfo ? 'Update this user' : 'Add a new user'}</button>
        </form>
      </div>
    )
}

export default FormUser
