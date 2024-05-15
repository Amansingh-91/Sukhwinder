import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByValue } from './conterSlice'

const Counter = () => {
    const {count} = useSelector((state)=>state.counter)
    const dispatch = useDispatch();
  return (
    <center>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={()=>dispatch(increment())}>Inc</button>
        <button onClick={()=>dispatch(incrementByValue({value:10,msg:"I am Aman"}))}>Inc by 10</button>
        <button onClick={()=>dispatch(decrement())}>Dec</button>
    </center>
  )
}

export default Counter