import React, {useCallback, useState} from 'react'
import CallBackTodo from './CallBackTodo';

const UseCallbackExample = () => {
    const [count,setCount] = useState(0);
    

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
        <CallBackTodo tasks={tasks} handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem} setItem={setItem} item={item}/>
           

    </div>
  )
}

export default UseCallbackExample


