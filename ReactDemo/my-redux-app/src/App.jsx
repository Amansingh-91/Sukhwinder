import React from 'react'
import Counter from './Components/counter/Counter'
import { useSelector } from 'react-redux'
const App = () => {
    const count = useSelector(state=>state.counter.count);
  return (
    <div>
        <Counter/>

        <p>{count}</p>
    </div>
  )
}

export default App