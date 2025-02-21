import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


const UserDetails = () => {
  const [info,setInfo]=useState({})
// collect the id from the url using useParams

const{id}=useParams()

// we will use this id to get one userById
  // we wil declare a function using axios to get the user by id 
  const userFromDb=async()=>{
    const user=await axios.get(`http://localhost:3000/api/users/${id}`)
    console.log(user)
    // we will set the info
    setInfo(user.data)
  }

  //we will useEffect to execute the function auto ...
useEffect(()=>{
  userFromDb()
},[])

console.log(id)
  return (
    <div className='container mt-4'>
       <h1>First name: {info.firstName}</h1>
    </div>
  )
}

export default UserDetails