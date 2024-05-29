import React from 'react'
import {useDispatch} from "react-redux";
import { addUser } from './signupSlice';
const SignUp = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const userName = e.target[0].value.trim();
        const userEmail = e.target[1].value.trim();
        const userPassword = e.target[2].value.trim();
        if(userName && userEmail && userPassword){
          dispatch(addUser({email:userEmail,password:userPassword,name : userName}));
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your full name'/>
        <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password'/>

        <button type='submit'>addUser</button>
      </form>
    </div>
  )
}

export default SignUp