import React from 'react';


function NavComponent() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="#">Your Logo</a>
        <ul className="d-flex flex-row ml-auto list-unstyled text-white">
            <li className="nav-item m-2">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link" href="#">Cart (0)</a>
            </li>
        </ul>
    </div>
</nav>
);
}

export default NavComponent;
