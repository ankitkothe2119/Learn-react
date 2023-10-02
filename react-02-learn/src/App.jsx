import React, { useState } from 'react'
import './App.css'

function App() {
const [counter, setcounter] = useState(0)
// let counter= 10

const increase = ()=>{
   if (counter == 20){
    
      setcounter(20)
    
   }else{
    setcounter(counter+1)
   }
}

const Dcrease = ()=>{
  if (counter == 0){
    
      setcounter(0)
    
   }else{
    setcounter(counter-1)
   }
  
}
  return (
    <>
      <h1> State Update counterer </h1>
      <h2>counterer value : {counter}</h2>
      <button onClick={increase}>Increase</button>{"  "}
      <button onClick={Dcrease}>Dcrease</button>
    </>  
  )
}

export default App
