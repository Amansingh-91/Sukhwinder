import React, { useState,useRef} from 'react'

const UseRefExample = () => {
    // allow you to reference any element on dom
    // stores the data between rerenders and on change of this data on render is performed

    const [count,setCount] = useState(0);

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



    const initialValue = {
        email: "",
        password: "",
    }
    const formData = useRef(initialValue);
    const handleSubmit = (e) => {
        e.preventDefault();
        formData.current.email = e.target[0].value;
        formData.current.password = e.target[1].value;
        console.log(formData.current);
    }
    console.log("render",formData);

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' />
                    <br />
                    <button type="submit">login</button>
                </form>
            </center>

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

export default UseRefExample