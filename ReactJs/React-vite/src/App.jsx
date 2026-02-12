import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiData from './components/ApiData'
import Timer from './components/Timer'

function App() {
  // const [name,setName] = useState("");
  
  // let handleCount = ()=>{
    //   setCount(count+1);
    // }
    // useEffect(()=>{
      //   document.title = `title changed ${count}`
      // },[count])
      
  const [show,setShow] = useState(false);
  return (
    <>
      {/* <h1>This is Vite App Using Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>Change Title</button> */}
      {/* <ApiData/> */}
      {show && <Timer/>}
      <button onClick={()=>setShow(!show)}>Show Timer</button>
    </>
  )
}

export default App
