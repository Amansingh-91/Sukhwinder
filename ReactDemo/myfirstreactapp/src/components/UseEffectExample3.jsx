import React, { useEffect, useState } from 'react'

const UseEffectExample3 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [data,setData] = useState([]);

    useEffect(()=>{
        if(isLoggedIn){
            fetch("https://jsonplaceholder.typicode.com/todos/").then(res=>{
            //   console.log(res);
              return res.json();
            }).then(data=>{
                // console.log(data);
                setData(data)
            });
        }
    },[isLoggedIn]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        if(email === "aman@xyz.com" && password === "1234A"){
            setIsLoggedIn(true);
            e.target.reset();
            console.log("Login successful");
        }
    }
    return (
        <div>
            <center>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button type="submit" >login</button>
                </form>
            </center>
            <center>
                <h1>TODOS</h1>
                <ul>
                    {
                        data.map(task=>{
                            // console.log(task);
                            return <li key={task.id}>{task.title}</li>
                        })
                    }
                </ul>
            </center>
        </div>
    )
}

export default UseEffectExample3