import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="nav-link active" aria-current="page" to="/allUsers">All Users</Link>
    
    </div>
</nav>
  )
}

export default NavBar