import React from 'react'

const Counter = () => {
    let count = 0;

    const increase = (e) => {
        e.stopPropagation();
        count = count + 1;
        console.log("new value of Count ", count);
    }
    const decrease = (e) => {
        e.stopPropagation();
        count = count - 1;
        console.log("new value of Count ", count);
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
        </div>
    )
}

export default Counter