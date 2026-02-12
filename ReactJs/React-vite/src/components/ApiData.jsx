import React, { useEffect, useState } from 'react'

function ApiData() {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/psts");
                const result = await response.json();
                if(!response.ok){
                    throw new Error("Error while fetching data")
                }
                setData(result);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(true);
            }
        }
        fetchData();
    },[]);
    if(!loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
  return (
    <div>
      <h1>Fetching data from API</h1>
      {data.slice(0,10).map((item,idx)=>(
        <p key={item.id}>{idx+1}.{item.title}</p>
      ))}
    </div>
  )
}

export default ApiData
