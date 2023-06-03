
import { useState } from 'react'
import './App.css'
import Allproduct from './Component/Allproduct/Allproduct'
import Menubar from './Component/Menubar/Menubar'

function App() {

  const [count , setCount] = useState(0)

  const setCartCount = () =>{
    setCount(count +1 )
  }

  console.log(count);
 
  return (
    <>
  <Menubar count={count} ></Menubar>
  <Allproduct setCartCount={setCartCount} ></Allproduct>
      
    </>
  )
}

export default App
