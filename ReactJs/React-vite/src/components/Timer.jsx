import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
   const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Timer started...");

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);


    return () => {
      console.log("Timer stopped...");
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
        <h1>Count : {count}</h1>
      <h1>Timer: {seconds} sec</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increase</button>
    </div>
  );
}

export default Timer;

