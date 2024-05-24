import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Book = () => {
  return (
    <>
        <h1>Books</h1>
        <div className="navbar">
        <NavLink className={(e) => e.isActive ? "nav-item red" :"nav-item" } to={"/book/1"}>Book1</NavLink>
        <NavLink className={(e) => e.isActive ? "nav-item red" :"nav-item" } to={"/book/2"}>Book2</NavLink>
        <NavLink className={(e) => e.isActive ? "nav-item red" :"nav-item" } to={"/book/3"}>Book3</NavLink>
        </div>
        <Outlet/>

    </>
  )
}

export default Book