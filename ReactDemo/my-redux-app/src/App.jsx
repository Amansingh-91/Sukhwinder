import React from 'react'
import Counter from './Components/counter/Counter'
import TODO from './Components/todo/TODO'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  // const count = useSelector(state=>state.counter.count);
  return (
    // <div>
    //     {/* <Counter/> */}

    //     {/* <p>{count}</p> */}
    //     {/* <TODO/> */}
    // </div>


    <BrowserRouter basename='/'>
      <Routes>
        {/* <Route index element={<><Navbar/> <Home /></>}></Route>
            <Route path='todo' element={<><Navbar/> <TODO /></>}></Route>
            <Route path='counter' element={<><Navbar/> <Counter /></>}></Route> */}

        <Route path='' element={<Navbar />}>
          <Route index element={ <Home />}></Route>
          <Route path='todo' element={ <TODO />}></Route>
          <Route path='counter' element={ <Counter />}></Route>
        </Route>
        <Route path="*" element = {<><Navbar/><h1>Page not fount</h1></>} ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App