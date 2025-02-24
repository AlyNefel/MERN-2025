import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskDetails from './components/TaskDetails'
import TaskForm from './components/TaskForm'
import TaskUpdate from './components/TaskUpdate'


function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/"  element={<TaskList/>}></Route>
        <Route path="/create"  element={<TaskForm/>}></Route>
        <Route path="/update/:id"  element={<TaskUpdate/>}></Route>
        <Route path="/details/:id"  element={<TaskDetails/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
