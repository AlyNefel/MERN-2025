import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import Other from './components/Other';
// import {AllUsers,Home} from './components'
import NavBar from './components/NavBar';
import OneUser from './components/OneUser';
function App() {
    const [users,setUsers]=useState([])
    const [error,setErro]=useState('')
    const [query,setQuery]=useState('')
    const fetchUsers= async()=>{
      // try catch block
      try {
      const result=    await axios.get('https://randomuser.me/api/?results=6')
          console.log(result.data.results)
          //set the result to users
          setUsers(result.data.results)
      } catch (error) {
          setErro("Sorry !!there is an error ")
          console.log(error.me)
      }
    


  }
   // useEffect 
   useEffect(()=>{
      //calling the function that will fetch users
      fetchUsers()
   },[])
   console.log("from app ",users)
  return (
    <>
   
     <Router>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/allUsers" element={<AllUsers  users={users}/>}></Route>
        <Route path="/oneUser/:id"  element={<OneUser users={users} />}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
