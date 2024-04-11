import React, { useState } from 'react'

const UseStateExample2 = () => {
    const [names,setNames] = useState(["aman","jhon","jack","jim"]);

    const handleName = (e)=>{
        e.stopPropagation();
        if(e.target.tagName === "H1"){
            setNames((prev)=>{
                return [...prev,e.target.textContent];
            });
        }
    }
  return (
    <div onClick={handleName}>
        {
            names.map(name=>{
                return <h1>{name}</h1>;
            })
        }
    </div>
  )
}

export default UseStateExample2