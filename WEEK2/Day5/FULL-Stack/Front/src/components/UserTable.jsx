import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const UserTable = ({handleSelect,handleDeleteUser}) => {
// declare a state 
const [users,setUsers]=useState([])

//we will get or fetch our data using axios && useEffect
const getAllUsersFunction=async()=>{
  const allUsers= await axios.get('http://localhost:3000/api/users')
 console.log("all users after axios call ",allUsers)
 //we will set our users using usestate
 setUsers(allUsers.data)
}
useEffect(()=>{
  getAllUsersFunction()
},[handleSelect])

  return (
    <div className='container mt-4'>
      <Link to="/create" className='btn btn-primary mb-3'>Create +</Link>

  
<table className='table table-striped'>
<thead>
  <tr>
    <th>Name </th>
    <th>Email</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
{users.map(user=>(
  <tr key={user._id}>
    <td>{user.firstName}</td>
    <td>{user.email}</td>
    <td>
      <button className='btn btn-success'>Edit</button>
      <Link className='btn btn-danger' to={`/view/${user._id}`}>View</Link>
      {/* <button className='btn btn-info'>View</button> */}
      <button className='btn btn-danger' onClick={()=>handleSelect(user._id)}>Delete</button>
    </td>
  </tr>
))

}
</tbody>

</table>
    </div>
  )
}

export default UserTable