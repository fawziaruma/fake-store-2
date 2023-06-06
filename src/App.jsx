
import { useEffect, useState } from 'react'
import './App.css'
import Allproduct from './Component/Allproduct/Allproduct'
import Menubar from './Component/Menubar/Menubar'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  const [count , setCount] = useState(0)

  const setCartCount = () =>{
    setCount(count +1 )
  }

 useEffect( () =>{
     AOS.init();
     AOS.refresh()
 } , [] )
 
  return (
    <>
  <Menubar count={count} ></Menubar>
  <Allproduct setCartCount={setCartCount} ></Allproduct>
      
    </>
  )
}

export default App
