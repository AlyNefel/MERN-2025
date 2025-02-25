import React,{useState,useEffect} from 'react'
import axios from "axios"
import {useNavigate,useParams} from "react-router-dom"

const TaskUpdate = () => {
const [formData,setFormData]=useState({title:'',content:'',priority:'',dueDate:''})
const {id}=useParams()

const getOneTask=async()=>{
  try {
   const oneTask=( await axios.get(`http://localhost:3000/tasks/${id}`)).data  

  setFormData(oneTask)
  } catch (error) {
    
  }
}


const [errors,setErrors]=useState({})
const navigate = useNavigate()
// function for validation in the front
const validate=()=>{
  const errors={}
  if(formData.title.length<5){
    errors.title="Tile is required and must be at least 5 characters"
  }
  if(formData.content.length===0){
    errors.content="Content is required !"
  }
  setErrors(errors)
  // just this line to return the lenght of the keys of error object
  return Object.keys(errors).length ===0
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  if(!validate()) return;

try {
  await axios.put(`http://localhost:3000/tasks/${id}`,formData)
  setFormData({title:'',content:'',priority:'',dueDate:''})
  navigate('/')
} catch (error) {
  console.error(error)
}
}
useEffect(()=>{
  getOneTask()
},[])
  return (
    <div className='container mt-4'>
    {JSON.stringify(errors)}
 <form className='form-control' onSubmit={handleSubmit}>
  <div>

  </div>

  <input
  className='form-control'
  type="text"
placeholder='title '
  value={formData.title}
  onChange={(e)=>setFormData({...formData,title:e.target.value})}
  />
   {errors.title && <p className='text-danger'>{errors.title}</p>}
{/* title errorrs */}

<input
  className='form-control'
  type="text"
   placeholder='content'
  value={formData.content}
  onChange={(e)=>setFormData({...formData,content:e.target.value})}
  />
{/* content erros */}
{errors.content && <p className='text-danger'>{errors.content}</p>}
<label htmlFor="">Selet</label>
<select
className='form-control'
value={formData.priority}
onChange={(e)=>setFormData({...formData,priority:e.target.value})}
>
<option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>

</select>
{/* priority errorrs */}
<label htmlFor="">Due Date</label>
<input
  className='form-control'
  type="date"
  value={formData.dueDate}
  onChange={(e)=>setFormData({...formData,dueDate:e.target.value})}
  />
<button className='btn btn-primary mt-4'>Submit</button>
 </form>

  </div>
  )
}

export default TaskUpdate