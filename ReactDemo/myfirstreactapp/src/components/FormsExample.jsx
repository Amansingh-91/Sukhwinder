import React, { useState } from 'react'

const FormsExample = () => {
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    const initialValue = {
        email:"",
        password:"",
        
    }
    const [formData,setFormData] = useState(initialValue);
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(e.target[0].value,e.target[1].value);
        console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' value={formData.email}  onChange={(e)=>{
                setFormData({...formData,email:e.target.value});
            }} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={formData.password} onChange={(e)=>{
                setFormData({...formData,password:e.target.value});
            }}/>
            <br />
            <button type="submit">login</button>
        </form>
    </div>
  )
}

export default FormsExample