import React from "react";
import "./Navbar.css";
import {NavLink, Link } from 'react-router-dom'


const NavbarComponent = () => {
  return (
    <header>
      <div className="navbar__list">
      <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick And Morty - SESATECH
         </Link>
      </div>
    </header>
  );
};

export default NavbarComponent;
