import React from 'react'
import { useState } from 'react'
const Counter = () => {
 const [count, setCount] = useState(5)
 const handelChange=()=>{
    setCount(count+2)
  
   }
   const resetCount=()=>{
    setCount(0)
   }

   const decreaseCount=()=>{
    setCount(count-1)
   }
  return (
    <div>
        <div className="card">
        
        <button onClick={handelChange}>
          count is {count}
        </button>
       <button onClick={resetCount}>Reset</button>
       <button onClick={decreaseCount}>Decrease {count}</button>
        </div>
        </div>
  )
}

export default Counter