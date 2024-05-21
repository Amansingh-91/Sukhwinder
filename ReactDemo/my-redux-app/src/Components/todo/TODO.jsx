import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { add,del,complete } from './todoSlice';
import "./TODO.css";
const TODO = () => {
  const [item,setItem] = useState("");
  const {tasks} = useSelector((state)=>state.todo);
  const dispatch = useDispatch();

  const handleItem = (e)=>{
    e.preventDefault();
    // console.log(e);
    let myItem = e.target.value.trim();
    if ( myItem.length > 0){
      setItem(myItem);
    }
  } 

  const handleAddItem = (e)=>{
    e.preventDefault();
    if(item.length > 0){
      // const newItem = {id:Date.now(),item:item.trim(),err:"my err"};
      // console.log(newItem);
      // dispatch(add({newItem}));
      
      dispatch(add({item:item.trim()}));
      setItem("")
    }

  }

  const handleDelItem = (e)=>{
    e.stopPropagation();
    if(e.target.tagName === "SPAN"){
      dispatch(del({id:e.target.parentElement.id}));
    }
    else if(e.target.tagName === "LI"){
      dispatch(complete({id:e.target.id}));
    }
  }

  return (
    <main>
      <center>
        <h1>Grocery List App</h1>
        <ul className="tasks" onClick={handleDelItem}>
          {/* <li className="task">apples    <span>X</span></li>
          <li className="task">milk      <span>X</span></li>
          <li className="task">bread   <span>X</span></li> */}

          {
            
            tasks.map(task => {
              const classes = task.complete ? "task deleted":"task";
              return <li key={task.id} id={task.id} className={classes}>{task.item}<span>X</span></li>;
            })

          }
          {console.log(tasks)}
        </ul>
        <form onSubmit={handleAddItem}>
          <input type="text" placeholder='Add Grocery' onChange={handleItem} value={item} />
        </form>
      </center>
    </main>
  )
}

export default TODO