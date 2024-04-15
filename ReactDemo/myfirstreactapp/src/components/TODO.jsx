import React, { useState } from 'react'
import "./TODO.css";
const TODO = () => {
    // [1,2,3,5,6]
    const [tasks,setTasks] = useState([{item:"apple", id:1},{item:"milk", id:2},{item:"bread", id:3}]);
    const [item,setItem] = useState("");
    const handleChange = (e)=>{
        e.stopPropagation();
        // console.log(e.target.value);
        setItem(e.target.value);

    }
    const handleAddItem = (e)=>{
        e.preventDefault();
        if(item.trim().length > 0){
            setTasks([...tasks,{item:item.trim(), id:Date.now()}]);
        }
        setItem("");
    }
    const handleDeleteItem = (e)=>{
        e.stopPropagation();
        if(e.target.tagName === "SPAN"){
            console.log(e.target.parentElement.id);// item id from list 
            const newTasks = tasks.filter(task => task.id != e.target.parentElement.id)
            // console.log(newTasks);
            setTasks(newTasks)
        }
    }
    return (
        <main>
            <center>
                <h1>Grocery List App</h1>
                <ul className="tasks" onClick={handleDeleteItem}>
                    {/* <li className="task">apples    <span>X</span></li>
                    <li className="task">milk      <span>X</span></li>
                    <li className="task">bread   <span>X</span></li> */}

                    {
                        tasks.map(task =>{
                            return <li key={task.id} id={task.id} className ="task">{task.item}<span>X</span></li>;
                        })
                    }
                </ul>
                <form onSubmit={handleAddItem}>
                    <input type="text" placeholder='Add Grocery' onChange={handleChange} value={item}/>
                </form>
            </center>
        </main>
    )
}

export default TODO