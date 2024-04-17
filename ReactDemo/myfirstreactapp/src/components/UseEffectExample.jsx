import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Use Effect");
    if(isLoggedIn){ //true
      setCount(count + 1)
    }
    else{
      console.log("Render");
    }
    return ()=>{
      console.log("clean up function");
    }
  }, [isLoggedIn]);
  // if(isLoggedIn){
  //   setCount(count + 1)
  // }
  // else{
  //   console.log("render");
  // }
  return (
    <div>
      <button onClick={() => {
        setIsLoggedIn(!isLoggedIn);
      }}>Login</button>
      <center>
        {/* <h1>Counter</h1>
        <p>
          <button onClick={() => { setCount(count + 1) }}>inc</button>
          <span>{count}</span>
          <button onClick={() => { setCount(count - 1) }}>dec</button>
        </p> */}
        <h1>No. of times User Logged in: {count}</h1>
      </center>
    </div>
  )
}

export default UseEffectExample