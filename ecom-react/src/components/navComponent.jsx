import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function NavComponent() {
  return (  
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <Link to="/" className='nav-link text-white'>My Logo</Link>
        <ul className="d-flex flex-row ml-auto list-unstyled text-white">
            <li className="nav-item m-2">
            <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className="nav-item m-2">
            <Link to="/contact" className='nav-link'>Contact</Link>
            </li>
            <li className="nav-item m-2">
            <Link to="/cart" className='nav-link'>🛒(0)</Link>
            </li>
        </ul>
    </div>
</nav>

);
}

export default NavComponent;
