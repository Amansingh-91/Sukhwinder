import React, {useState} from 'react'

const UseCallbackExample = () => {
    const [count,setCount] = useState(0);

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
        else if(e.target.tagName === "LI"){
            console.log(e.target.id);// item id from list 
            // console.log(e.target.classList);
            e.target.classList.toggle("deleted");
        }
    }

    const increase = (e) => {
        e.stopPropagation();
        // count = count + 1;//number
        setCount(count + 1 );
        console.log("new value of Count ", count);
        console.log("in counter");
    }
    const decrease = (e) => {
        e.stopPropagation();
        setCount(count - 1);
        console.log("new value of Count ", count);
        console.log("In counter");
    }
    
    
  return (
    <div>
        <h1>Problem</h1>
        <center>
                <h1>Counter</h1>
                <p>
                    <button onClick={increase}>inc</button>
                    <span>{count}</span>
                    <button onClick={decrease}>dec</button>
                </p>
        </center>
        <center>
                <h1>Grocery List App</h1>
                <ul className="tasks" onClick={handleDeleteItem}>
                    {/* <li className="task">apples    <span>X</span></li>
                    <li className="task">milk      <span>X</span></li>
                    <li className="task">bread   <span>X</span></li> */}

                    {
                        tasks.map(task =>{
                            console.log("in Todo ");
                            return <li key={task.id} id={task.id} className ="task">{task.item}<span>X</span></li>;
                        })
                    }
                </ul>
                <form onSubmit={handleAddItem}>
                    <input type="text" placeholder='Add Grocery' onChange={handleChange} value={item}/>
                </form>
            </center>
           

    </div>
  )
}

export default UseCallbackExample


