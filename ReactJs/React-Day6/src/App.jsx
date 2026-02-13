import { createContext,useContext, useState } from 'react'
import './App.css'
import DataProvider from './context/DataProvider'
import DataConsumer from './component/DataConsumer'


// function Box({children}){
//   return <div style={{border:"2px solid black",padding:"20px",margin:"10px"}}>
//     {children}
//   </div>
// }

//1. creating a context
// const userContext = createContext();
function App() {
  // const [user, setUser] = useState("Sourav");

  //2.provide context
  return (
    <>
      {/* <Parent user = {user}/> */}
      {/* <Box>
      <h1>Hello from React</h1>
      <p>I am the p tag</p>
      </Box>
      <Box>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aperiam, ad modi eos, qui molestias adipisci, deleniti facere ab facilis dolorum dicta iusto dolorem harum nemo rem cupiditate quia. Fugiat?
        </p>
      </Box> */}
      {/* <userContext.Provider value={{user,setUser}}>
        <Parent/>
      </userContext.Provider> */}
      <h1>Hello From React</h1>
      <DataProvider>
        <DataConsumer/>
      </DataProvider>
    </>
  )
}

// function Parent(){
//   // return <Child user = {user}/>;
//   return <Child/>
// }

// function Child(){
//   // return <GrandChild user = {user}/>
//   return <GrandChild/>
// }

// function GrandChild(){
//   //3.consuming the context
//   const consumer = useContext(userContext);
//   return <h1>Hello, I am {consumer.user}</h1>
// }

export default App
