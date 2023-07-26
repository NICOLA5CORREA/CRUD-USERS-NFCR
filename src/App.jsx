import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import Loader from './components/Loader'
import DeleteMessage from './components/DeleteMessage'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm]= useState(true)
  const [isLoading, setIsLoading]= useState(true)
  const [isdeleted, setIsDeleted]= useState(false)


const baseUrl = 'https://users-crud.academlo.tech'
const [ 
  users, 
  getAllUsers, 
  createNewUser, 
  deleteUserById, 
  updateUserById, 
] = useFetch (baseUrl, setCloseForm)

useEffect (() => {
  getAllUsers('/users');
  setIsLoading (true)
    axios.get (baseUrl)

    .then (res => {
      setUpdateInfo(res.data)
    })

    .catch (err => {
      console.log(err)
    })

    .finally(() => {
      setIsLoading(false)
    })
}, [])

  const handleOpenForm = () => {
    setCloseForm (false)
}
  return (
    <>
    <h1 className="title__page">
        Users List
      </h1>
        <button className="btn__form" onClick={handleOpenForm} >Open Form (+)</button>
      <FormUser 
        createNewUser = {createNewUser}
        updateInfo = {updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm= {setCloseForm}
      />
      { 
        isLoading 
        ? <Loader/>
        : (
          <div className="usercard_info-wraper">
      {
        users?.map(user => (
          <UserCard 
            key= { user.id }
            user={ user }
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}

          />
          ))
      }
    </div> 
        )
    }
    </>
  )
}

export default App
