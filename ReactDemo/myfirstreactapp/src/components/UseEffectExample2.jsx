import React,{useState,useEffect} from 'react'

const UseEffectExample2 = () => {
    // let msg = 0;
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("use effect");
        if(count >0){
            // msg = count;
            // document.title = `new message(${msg})`;
            document.title = `new message(${count})`;

        }
    },[count]);

    const increase = (e) => {
        e.stopPropagation();
        // count = count + 1;//number
        setCount(count + 1 );
        console.log("new value of Count ", count);
    }
    const decrease = (e) => {
        e.stopPropagation();
        setCount(count - 1);
        console.log("new value of Count ", count);
    }
    return (
        <center>
            <h1>Counter</h1>
            <p>
                <button onClick={increase}>inc</button>
                <span>{count}</span>
                <button onClick={decrease}>dec</button>
            </p>
        </center>
    )
}

export default UseEffectExample2