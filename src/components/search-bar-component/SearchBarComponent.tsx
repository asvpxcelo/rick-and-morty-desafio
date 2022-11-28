import React from "react";
import "./Searchbar.css";

const SearchBarComponent = ({ setSearch, setPagination }) => {

  const searchCharacter = ((e) => {
    e.preventDefault();
  })
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5 mt-5">
      <input className="input"
      type="text"
            placeholder="Buscar Personagens"
            onChange={(e) => {
              setPagination(1)
              setSearch(e.target.value)
            }}>
      </input>
      <button
      onClick={searchCharacter}
      className="btn btn-primary fs-5">Pesquisar</button>
    </form>
  );
};

export default SearchBarComponent;
