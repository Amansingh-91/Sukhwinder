import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Components/Ecom/Navbar';
import SignUp from './Components/Ecom/SignUp';

const EcomApp = () => {
  return (
    <div className='container'>
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='' element={<><Navbar/><Outlet/></>}>
                    <Route index element = {<h1>Home</h1>}></Route>
                    <Route path='products' element = {<h1>Products</h1>}></Route>
                    <Route path='product/:id' element = {<h1>Mobile 1</h1>}></Route>
                    <Route path='cart' element = {<h1>Cart</h1>}></Route>
                    <Route path='signup' element= {<SignUp/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default EcomApp