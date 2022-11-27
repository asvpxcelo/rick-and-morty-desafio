import React, { useEffect, useState } from 'react';
import './App.css';
// Services
import api from './services/api';
// Components
import NavbarComponent from './components/navbar-component/NavbarComponent';
import CharactersComponent from './components/characters-component/CharactersComponent';
import PaginationComponent from './components/pagination-component/PaginationComponent';

// Interfaces
import { Caracter } from './interfaces/Caracters';
import { Results } from './interfaces/Results';
import SearchBarComponent from './components/search-bar-component/SearchBarComponent';
import FiltersComponent from './components/filters-component/FiltersComponent';

export const App = () => {
  const [pagination, setPagination] = useState<number>(1);
  const [caracters, setCaracters] = useState<Array<Caracter>>([]);
  const [isNextPage, setIsNextPage] = useState(false);
  const [search, setSearch] = useState('')
  const [statusSearch, setSearchStatus] = useState('');
  const [genderSearch, setGenderSearch] = useState('');
  
  useEffect(() => {
    api.get <Results>(`?page=${pagination}&name=${search}&status=${statusSearch}&gender=${genderSearch}`).then(({data}) => {
      setCaracters(data?.results);
      console.log(data?.results)

      // Trata o retorno das páginas caso a page seja maior que a paginação irá esconder o button
      setIsNextPage(data?.info?.pages > pagination)
    });
  }, [pagination, search, statusSearch, genderSearch]);

  return (
    <div className="navbar__component">
      <NavbarComponent />
      <div className='searchbar__component'>
        <SearchBarComponent
          setPagination={setPagination}
          setSearch={setSearch}
        />
      </div>
      <div className='filters__component'>
      <FiltersComponent
      setSearchStatus={setSearchStatus}
      />
      </div>
      <div className='characters__component'>
      <CharactersComponent characters = {caracters}/> 
      </div>
      <div className='pagination__component'>
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
