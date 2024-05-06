import React,{useReducer,useState} from 'react'

// useReducer is also used to create state variable 
// it used to manage complex states in better/ easy way
// three steps to establish useReducer
// 


import "./TODO.css";
const UseReducerExample = () => {

    const initialState = [{item:"apple", id:1},{item:"milk", id:2},{item:"bread", id:3}];

    // reducer function
    const reducer = (state,action)=>{
        // console.log(state,action);
        

        // console.log(e);
        switch (action.Type) {
            case "DELETE":
                const {e} = action.payLoad;
                if(e.target.tagName === "SPAN"){
                    
                   let id = e.target.parentElement.id; 
                   const newItemListAfterDelete = state.filter(task=>task.id != id)
                   return newItemListAfterDelete;
                }
                if(e.target.tagName === "LI"){
                    e.target.classList.toggle("deleted");
                 }
                return state;
            case "ADD":
                let {item} =  action.payLoad;
                console.log(item);
                if(item && item.trim().length != 0){
                    return [...state,{item:item.trim(),id:Date.now()}]
                }
                    
                return state;
            default:
                return state;
        }
        
    }





    const [tasks,dispatch] = useReducer(reducer,initialState);
    const [item,setItem] = useState("");
    const handleChange = (e)=>{
        e.stopPropagation();
        // console.log(e.target.value);
        setItem(e.target.value);

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({Type:"ADD",payLoad:{item}})
        setItem("");
    }
    return (
        <main>
            <center>
                <h1>Grocery List App</h1>
                <ul className="tasks" onClick={(e)=>dispatch({Type:"DELETE",payLoad:{e:e}})}>
                    {/* <li className="task">apples    <span>X</span></li>
                    <li className="task">milk      <span>X</span></li>
                    <li className="task">bread   <span>X</span></li> */}

                    {
                        tasks.map(task =>{
                            return <li key={task.id} id={task.id} className ="task">{task.item}<span>X</span></li>;
                        })
                    }
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Add Grocery' onChange={handleChange} value={item}/>
                </form>
            </center>
        </main>
    )
}

export default UseReducerExample;

