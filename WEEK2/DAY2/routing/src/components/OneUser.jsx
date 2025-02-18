import React from 'react'
import { useParams } from 'react-router-dom';

const OneUser = ({users}) => {

    const {id}=useParams()
    console.log(id)
  
    const findUser=users.find((user,index)=>index.toString()===id)
    console.log(findUser)
  return (
    <div>One user Data : it's id is {id}
    <h1>{findUser.name.first} {findUser.name.last}</h1>
    </div>
   
  )
}

export default OneUser