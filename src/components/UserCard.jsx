import React from 'react'
import './styles/UsersCard.css'


const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
    const handleDelete = () => {
        deleteUserById('/users', user.id)
        
    }
    const handleUpdate = () => {
        setUpdateInfo (user)
        handleOpenForm ()
    }

return (
<article className="usercard__wrapp">
    <h2 className="usercard__firstname">{`${user.first_name} ${user.last_name}`}</h2>
    
    <ul className="usercard__container">
        <li className="usercard__group">
            <span className="group__input">Email: </span>
            <span className="group__info">📧{user.email}</span>
        </li>
        <li className="usercard__group">
            <span className="group__input">Birthday: </span>
            <span className="group__info">🎁{user.birthday}</span>
        </li>
    </ul>
    <hr />
    <footer className="usercard__icons">
        <button className="btn__trash__user" onClick={handleDelete}> <i className='bx bxs-trash bx-sm' ></i> </button>
        <button className="btn__edit__user" onClick={handleUpdate}> <i className='bx bx-edit bx-sm'></i> </button>
    </footer>
</article>
)
}

export default UserCard

