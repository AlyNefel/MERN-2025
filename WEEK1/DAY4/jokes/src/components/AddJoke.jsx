import React from 'react'
import Button from './Button'
import Input from './Input'
const AddJoke = ({newJoke,handleChange,handelSubmit}) => {
  return (
    <div>
        <h1>Add Jokes</h1>
         <form onSubmit={handelSubmit}>
       <Input newJoke={newJoke} handleChange={handleChange} />
       <Button/>
      </form>
    </div>
  )
}

export default AddJoke