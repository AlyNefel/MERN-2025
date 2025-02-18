import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import NavBar from './NavBar'
const AllUsers = ({users}) => {
    //https://randomuser.me/api/?results=6
  
    console.log("users",users)

    //we will declare a function to get the data 
   
  return (
    <div>
        {/* {error} */}
        <NavBar></NavBar>
        <div className="row">
      {users.map((user,index)=>{
        return(
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
            <Link to={`/oneUser/${index}`}>
               <img src={user.picture.large} className="card-img-top" />
               </Link>
            </div>
            <div className="card-body">
                                    <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                                    
                                </div>
          </div>
        )
      })

      }
      </div>
    </div>
  )
}

export default AllUsers