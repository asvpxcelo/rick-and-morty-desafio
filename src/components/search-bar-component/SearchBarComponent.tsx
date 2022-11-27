import React from "react";
import "./Searchbar.css";

const SearchBarComponent = ({ setSearch, setPagination }) => {
  return (
    <div className="container">
      <form>
        <input
        className="search__characters"
          type="text"
          placeholder="Buscar Personagens"
          onChange={(e) => {
            setPagination(1)
            setSearch(e.target.value)
          }}
        />
      </form>
    </div>
  );
};

export default SearchBarComponent;
