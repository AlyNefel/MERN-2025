import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todos from './components/Todos'
import Header from './components/Header'
function App() {

 const test="from app to header"

  return (
    <>
      <Header first="sdjfhjhg" second={test}></Header>
     <Todos></Todos>
    </>
  )
}

export default App
