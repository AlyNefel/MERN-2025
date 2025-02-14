import React from 'react'

const Input = ({newJoke,handleChange}) => {
  return (
    <div>
         <input
        className='form-control'
        type='text'
        value={newJoke}
        placeholder='insert your joke'
        onChange={handleChange}
        ></input>
    </div>
  )
}

export default Input