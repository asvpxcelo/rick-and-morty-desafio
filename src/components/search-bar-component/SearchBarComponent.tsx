import React from "react";
import "./Searchbar.css";

/**
 * @Marcelo Soares 
 * SearchBarComponent - Componente para buscar personagens pelo nome
 * Props: setSearch, setPagination
 */

const SearchBarComponent = ({ setSearch, setPagination }) => {

  const searchCharacter = ((e) => {
    console.log('ue');
    e.preventDefault();
  })
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
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
      className="btn_searchbar btn-primary fs-5">Pesquisar</button>
    </form>
  );
};

export default SearchBarComponent;
