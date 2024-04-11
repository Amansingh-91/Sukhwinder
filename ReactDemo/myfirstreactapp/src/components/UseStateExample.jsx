import React, { useState } from 'react'

const UseStateExample = () => {
    const [title,setTitle] = useState("UseStateExample");
    const handleClick = (e)=>{
        e.stopPropagation();
        if( title === "UseStateExample"){
            setTitle("StateExample");

        }
        else{
            setTitle("UseStateExample");
        }
        console.log(title);

    }
    return (
        <h1 onClick={handleClick} >{title}</h1>
    )
}

export default UseStateExample