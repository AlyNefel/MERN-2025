import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOfJokes from './components/ListOfJokes'
import AddJoke from './components/AddJoke'


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
      <AddJoke newJoke={newJoke} handleChange={handleChange} handelSubmit={handelSubmit} />
     <ListOfJokes jokes={jokes} handleRemove={handleRemove}/>
      </div>
    </>
  )
}

export default App
