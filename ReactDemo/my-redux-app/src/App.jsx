import React from 'react'
import Counter from './Components/counter/Counter'
import TODO from './Components/todo/TODO'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Book from './Components/Book/Book';
import MyBook from './Components/Book/MyBook';
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
          <Route path='book' element={<Book/>}>
            <Route path=':id' element={<MyBook/>}></Route>
          </Route>
        </Route>
        <Route path="*" element = {<><Navbar/><h1>Page not found</h1></>} ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App