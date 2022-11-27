import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// Services
import api from './services/api';
// Components
import NavbarComponent from './components/navbar-component/NavbarComponent';
import CharactersComponent from './components/characters-component/CharactersComponent';
import PaginationComponent from './components/pagination-component/PaginationComponent';
import SearchBarComponent from './components/search-bar-component/SearchBarComponent';
import FiltersComponent from './components/filters-component/FiltersComponent';
// Interfaces
import { Caracter } from './interfaces/Caracters';
import { Results } from './interfaces/Results';


export const App = () => {
  const [pagination, setPagination] = useState<number>(1);
  const [caracters, setCaracters] = useState<Array<Caracter>>([]);
  const [isNextPage, setIsNextPage] = useState(false);
  const [search, setSearch] = useState('')
  const [statusSearch, setSearchStatus] = useState('');
  const [genderSearch, setGenderSearch] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('');
  
  useEffect(() => {
    // Retorna um GET na requisição da API com os filtros passados ou não
    api.get <Results>(`?page=${pagination}&name=${search}&status=${statusSearch}&gender=${genderSearch}&species=${searchSpecies}`).then(({data}) => {
      setCaracters(data?.results);

      // Trata o retorno das páginas caso a page seja maior que a paginação irá esconder o button
      setIsNextPage(data?.info?.pages > pagination)
    });
  }, [genderSearch, pagination, search, statusSearch, searchSpecies]);

  return (
    <div className="navbar__component">
      <NavbarComponent />
      <div className="searchbar__component">
        <SearchBarComponent
          setPagination={setPagination}
          setSearch={setSearch}
        />
        
      </div>
      <div className="characters__component">
      <FiltersComponent
          setSearchSpecies={setSearchSpecies}
          setPagination={setPagination}
          setSearchStatus={setSearchStatus}
          setGenderSearch={setGenderSearch}
        />
        <CharactersComponent characters={caracters} />
      </div>
      <div className="pagination__component">
        <PaginationComponent
          pagination={pagination}
          setPagination={setPagination}
          isNextPage={isNextPage}
        />
      </div>
    </div>
  );
}

export default App;
