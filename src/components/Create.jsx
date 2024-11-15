import React, { useState } from 'react'
import { addUser } from '../redux/UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id:users[users.length - 1].id + 1,name,email}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h1 style={{color:"cyan"}}>Add New User</h1>
           <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control' placeholder='Enter name...'
                onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' className='form-control' placeholder='Enter email...'
                onChange={ e => setEmail(e.target.value)} />
            </div>
            <button className='btn btn-info m-2'>Submit</button>
           </form>
        </div>
    </div>
  )
}

export default Create
