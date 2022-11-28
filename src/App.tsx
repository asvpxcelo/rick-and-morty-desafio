import React, { useEffect, useState } from 'react';
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
import EpisodesComponent from './components/episodes-component/EpisodesComponent';
import LocationComponent from './components/location-component/LocationComponent';
// Interfaces
import { Caracter } from './interfaces/Caracters';
import { Results } from './interfaces/Results';

// Packages - Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="app">
      <NavbarComponent />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/episode' element={<EpisodesComponent/>}/>
        <Route path='/location' element={<LocationComponent/>}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
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
    <div className="App">
      <div className="searchbar__component">
        <SearchBarComponent
          setPagination={setPagination}
          setSearch={setSearch}
        />
      </div>
      <div className="container">
        <div className='row'>
        <FiltersComponent
          setSearchSpecies={setSearchSpecies}
          setPagination={setPagination}
          setSearchStatus={setSearchStatus}
          setGenderSearch={setGenderSearch}
        />
        <div className="col-lg-8 col-12">
          <div className='row'>
          <CharactersComponent characters={caracters} />
          </div>
        </div>
        </div>
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
