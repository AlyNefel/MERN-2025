import React from 'react'

const ListOfJokes = (props) => {
    const {jokes,handleRemove}=props
   
  return (
    <div>
         
      <h1>List of Jokes</h1>
      {jokes.length===0?(
        <div className="alert alert-info">
          There is no Jokes yet 
        </div>
      ):(
        <ul>
        {jokes.map((elem,index)=>(
          <li key={index}>
            {elem}
          <button onClick={()=>handleRemove(index)} className='btn btn-danger'>Remove</button>
          </li>

        ))

        }
      </ul>
      )

      }
    </div>
  )
}

export default ListOfJokes