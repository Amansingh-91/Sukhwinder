import React from 'react'
import Counter from './Components/counter/Counter'
import { useSelector } from 'react-redux'
import TODO from './Components/todo/TODO'
const App = () => {
    // const count = useSelector(state=>state.counter.count);
  return (
    <div>
        <Counter/>

        {/* <p>{count}</p> */}
        <TODO/>
    </div>
  )
}

export default App