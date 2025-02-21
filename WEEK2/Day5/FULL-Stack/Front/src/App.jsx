import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Import all the components
import UserTable from './components/UserTable'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import UserDetails from './components/UserDetails'
// import Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'

function App() {
  // we declare it here to use it in all child components (pass it as a prop)
  const[selectedUserId,setSelectedUserId]=useState(null)

const handleSelect=(userId)=>{
  console.log("id ",userId)
  setSelectedUserId(userId),
  handleDeleteUser(userId)
}


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserTable handleSelect={handleSelect} handleDeleteUser={handleDeleteUser}  />} />
          <Route path="/create" element={<CreateUser/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
          <Route path="/view/:id" element={<UserDetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
