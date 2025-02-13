import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOfJokes from './components/ListOfJokes'


function App() {
  //make use state for our jokes
  const [jokes,setJokes]=useState([])
  const [newJoke,setNewJoke]=useState("")
  const [added,setAdded]=useState(false)
  // track the change inside our input
  const handleChange=(e)=>{
    // console.log(e)
    // we will set our new joke to e.target.value
    setNewJoke(e.target.value)
  }
const handelSubmit=(e)=>{
  e.preventDefault() // this line to prevent the reload of the page 
// we will add the newJoke to our jokes array
//first step : we will get our array of jokes
// second step : we will use spred to add the new joke
setJokes([...jokes,newJoke])
//after the push of the new joke we will clear the input
setNewJoke("")

}

// remove an item from jokes 
const handleRemove=(indexToRemove)=>{
  // we will get a copy of our joke array
  // we will filter ? by what : by index 
  const newList =jokes.filter((element,index)=>index!==indexToRemove)
  console.log(newList)
  // now we will set the newList to our jokes
  setJokes(newList)
}

  return (
    <>
    <div className='form-control'>
  
      <h1>Our Jokes</h1>
      <form onSubmit={handelSubmit}>
        <input
        className='form-control'
        type='text'
        value={newJoke}
        placeholder='insert your joke'
        onChange={handleChange}
        ></input>
        <button className="btn btn-success"
        
        >Add</button>
      </form>
      {/* <ListOfJokes jokes={jokes}></ListOfJokes> */}
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
    </>
  )
}

export default App
