import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import moment from 'moment';

const TaskList = () => {
const [tasks,setTasks]=useState([])
// define the function to get all tasks using axios 
const getAllTasks=async()=>{
  try {
    const result =(await axios.get("http://localhost:3000/tasks")).data
    // set tasks 
    setTasks(result)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
//delete const
const handelDelete=async(id)=>{
  try {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
  } catch (error) {
    console.error(error)
  }
}
useEffect(()=>{
  getAllTasks()
},[handelDelete])

//function to format our date
const formatDate=(date)=>{
return moment(date).format('LLLL')
}



  return (
    <div className='container mt-4'>
  <Link className='btn btn-success' to="/create">Create</Link>
  <table className='table table-striped'>
    <thead>
      <tr>
        <th>Title</th>

        <th>Priority</th>
        <th>Due Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {tasks.map((task)=>(
<tr key={task._id}>
  <td>{task.title}</td>
  <td>{task.priority}</td>
  <td>{formatDate(task.dueDate)}</td>
  <td>
    <Link className='btn btn-info' to={`/update/${task._id}`}>Update</Link>
    <Link className='btn btn-primary' to={`/details/${task._id}`}>Details</Link>
    <button onClick={()=>handelDelete(task._id)} className='btn btn-danger'>Delete</button>
  </td>
</tr>
    ))

    }
    </tbody>
  </table>
    </div>
  )
}

export default TaskList