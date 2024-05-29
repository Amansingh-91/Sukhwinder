import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { login } from './loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {users} = useSelector(state=>state.signup)
  const {isLoggedin} = useSelector(state=>state.login)
  useEffect(()=>{
    if(isLoggedin){
      navigate("/")
    }
  },[isLoggedin]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const userEmail = e.target[0].value.trim();
        const userPassword = e.target[1].value.trim();
        if(userEmail && userPassword){
          dispatch(login({email:userEmail,password:userPassword,users}));
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password'/>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login