import React, {memo,useState,useCallback} from 'react'

const CallBackTodo = () => {
    const [item,setItem] = useState("");
    const [tasks,setTasks] = useState([{item:"apple", id:1},{item:"milk", id:2},{item:"bread", id:3}]);
    const handleAddItem = useCallback(
        (e)=>{
            e.preventDefault();
            if(item.trim().length > 0){
                setTasks([...tasks,{item:item.trim(), id:Date.now()}]);
            }
            setItem("");
        },[item]
    )
    const handleDeleteItem = useCallback (
        (e)=>{
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
        },[tasks]
    )
    
    const handleChange = (e)=>{
        e.stopPropagation();
        // console.log(e.target.value);
        setItem(e.target.value);

    }
    
  return (
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
  )
}

export default memo(CallBackTodo);