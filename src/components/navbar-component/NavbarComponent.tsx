import React from "react";
import "./Navbar.css";
import {NavLink, Link } from 'react-router-dom'


const NavbarComponent = () => {
  return (
    <header>
      <div className="navbar__list">
      <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick And Morty - SESA
         </Link>
        <div className="navbar__links">
         <Link to="/episode" className="fs-3 ubuntu navbar-brand">
          Episodes
         </Link>
         <Link to="/location" className="fs-3 ubuntu navbar-brand">
          Location
         </Link>
         <Link to="/" className="fs-3 ubuntu navbar-brand">
          Characters
         </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
