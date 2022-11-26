import React from "react";
import "./Searchbar.css";

const SearchBarComponent = ({ setSearch, setPagination }) => {
  return (
    <div className="container">
        
      <form>
        <input
          type="text"
          placeholder="Buscar Personagens"
          onChange={(e) => {
            setPagination(1)
            setSearch(e.target.value)
          }}
        />
        <button className="button__search">Search</button>
      </form>
    </div>
  );
};

export default SearchBarComponent;
