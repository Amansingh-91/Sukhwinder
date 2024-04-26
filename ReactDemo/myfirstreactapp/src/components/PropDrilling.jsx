import React, { useState } from 'react'

const PropDrilling = () => {
    return (
        <Home />
    )
}
const Home = () => {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    return (
        <>
            {isLoggedin ? <><h1>Home</h1> <Profile isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} /> <button onClick={()=>{
        setIsLoggedIn(false);
    }}>logout</button></> : <Login isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />}
        </>
    )
}

const Profile = (props) => {
    const { isLoggedin, setIsLoggedIn } = props;

    return <div>{
        isLoggedin ? <><h1>Profile</h1> <WishList isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} /> </>: <h1>Login Again</h1>
    }
    <button onClick={()=>{
        setIsLoggedIn(false);
    }}>logout</button></div>
}
const Login = (props) => {
    const initialValue = {
        email: "",
        password: "",

    }
    const [formData, setFormData] = useState(initialValue);
    const { isLoggedin, setIsLoggedIn } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value,e.target[1].value);
        console.log(formData);
        if (formData.email === "aman@xyz.com" && formData.password === "1234") {
            setIsLoggedIn(true);
        }
    }
    return (<>
        {isLoggedin ? <Profile isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/> :
            <center>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' value={formData.email} onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                    }} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' value={formData.password} onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                    }} />
                    <br />
                    <button type="submit">login</button>
                </form>
            </center>
        }
    </>)
}

const WishList = (props) => {
    const { isLoggedin, setIsLoggedIn } = props;

    return <div>{
        isLoggedin ? <h1>WishList</h1> : <h1>Login Again</h1>
    }
    <button onClick={()=>{
        setIsLoggedIn(false);
    }}>logout</button>
    </div>
}

export default PropDrilling