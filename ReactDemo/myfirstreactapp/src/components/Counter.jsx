import React , {useState} from 'react'

const Counter = () => {
    // local variable
    // let count = 0;

// to preserve values between renders we use  state variable in react
// class component(stateful component) and functional component (stateless component)
// to overcome the issues of state variable in functional component we use react hooks
// rules about react hook
// all hooks must start from keyword 'use' ex - useState, useEffect , useMemo etc..
// hooks cannot be called conditionally 

// useState hook 
// we import it and named export 
// create and preserve state variable data between renders and rerenders
// that if there is change in the state value then automatically performs rerender.
    
    const [count,setCount] = useState(0);
    const [complexCount,setComplexCount] = useState(0);
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
    const increaseComplex = (e) => {
        e.stopPropagation();
        // count = count + 1;//number
        setTimeout(()=>{
            setComplexCount((prev)=>{
                return prev + 1;
            });
        },5000);
        console.log("new value of complex Count ", complexCount);
    }
    const decreaseComplex = (e) => {
        e.stopPropagation();
        setTimeout(()=>{
            setComplexCount((prev)=>{
                return prev - 1;
            });
        },5000);
        console.log("new value of complex Count ", complexCount);

    }
    return (
        <div>
            <center>
                <h1>Counter</h1>
                <p>
                    <button onClick={increase}>inc</button>
                    <span>{count}</span>
                    <button onClick={decrease}>dec</button>
                </p>
            </center>
            <center>
                <h1>Complex Counter</h1>
                <p>
                    <button onClick={increaseComplex}>inc</button>
                    <span>{complexCount}</span>
                    <button onClick={decreaseComplex}>dec</button>
                </p>
            </center>
        </div>
    )
}

export default Counter