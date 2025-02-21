import React,{useState} from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const CreateUser = () => {
const  [firstName,setFirstName]=useState('')
const  [email,setEmail]=useState('')

const navigate=useNavigate()
const handleSubmit=async(e)=>{
  e.preventDefault() 
  const userToAdd={firstName,email}
  await axios.post("http://localhost:3000/api/users",userToAdd)
  navigate('/')
}

  return (
    <div className='container mt-4'>
      <form onSubmit={handleSubmit}>
    <input className='form-control mb-3' 
    value={firstName}
    onChange={(e)=>setFirstName(e.target.value)}
    type="text" placeholder='add first name' />


    <input className='form-control'
    value={email}
    onChange={(e)=>setEmail(e.target.value)} type="text"  placeholder='add email'/>
 <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser