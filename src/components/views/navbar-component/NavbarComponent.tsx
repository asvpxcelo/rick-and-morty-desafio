import React from "react";
import "./Navbar.css";
import SearchBarComponent from "../search-bar-component/SearchBarComponent";


const NavbarComponent = () => {
  return (
    <header>
      <div className="navbar__list">
        <h1>Rick And Morty API</h1>
        <div className="searchbar__component">
        <SearchBarComponent />
        </div>
        <div className="navbar__links">
          <li>
            <a href="#"></a>Episodes
          </li>
          <li>
            <a href="#"></a>Charapcters
          </li>
          <li>
            <a href="#"></a>Location
          </li>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
