import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavLink className={(e) => e.isActive ? "nav-item red" :"nav-item" } to={"/"}>Home</NavLink>
                <NavLink className={(e) => e.isActive ? "nav-item red" :"nav-item"} to={"/todo"}>Todo</NavLink>
                <NavLink className={(e) => e.isActive ? "nav-item red" :"nav-item"} to={"/counter"}>Counter</NavLink>
                <NavLink className={(e) => e.isActive ? "nav-item red" :"nav-item"} to={"/book"}>Book</NavLink>
            </div>
            <Outlet></Outlet>
            
        </>
    )
}

export default Navbar