import React from 'react'
import {useDispatch} from "react-redux";
import { addUser } from './signupSlice';
const SignUp = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        dispatch(addUser({email:"aman@xyz.com",password:"1234"}));
    }
  return (
    <div>
        <button onClick={handleSubmit}>addUser</button>
    </div>
  )
}

export default SignUp