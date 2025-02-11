//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import Greet from './components/Greet'

function App() {
 const data="first var in react"
 const array=[1,2,3,5]
 const infos=[{
 
  name:"Malek",
  lastName:"3:35",
  address:"chebba"
 },
 {
  name:" Malek Junior",
  lastName:"Santos",
  address:"Brasil"
 }
]
  return (
    <>
    
     <Greet name="Hassen"></Greet>
     <Greet name="Malek"></Greet>
     <FirstComponent message={data}></FirstComponent>
     <h1>{ JSON.stringify(array)}</h1>
     <ul>
      {infos.map((item,index)=>
        <li key={index}>
          {index}
          <h2>{item.name}</h2>
          <h2>{item.lastName}</h2>
          <h2>{item.address}</h2>
        </li>
      )}
     </ul>
    </>
  )
}

export default App
