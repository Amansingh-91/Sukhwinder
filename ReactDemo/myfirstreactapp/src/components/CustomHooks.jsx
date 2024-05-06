import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
const CustomHooks = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts/");
    const todos  = useFetch("https://jsonplaceholder.typicode.com/todos/"); 

  return (
    <div>
        <h1>Custom hook</h1>
        <h6>Todos</h6>
        {todos[0].map((item)=>{
            return <p key={item.id}>{item.title}</p>
        })}
        <h6>Posts</h6>
        {data.map((item)=>{
            return <p key={item.id}>{item.title}</p>
        })}
    </div>
  )
}


export default CustomHooks