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
interface IGetResult {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: number | undefined
  }
  results: Array<Caracter>
}

export const App = () => {
  const [pagination, setPagination] = useState<number>(1);
  const [caracters, setCaracters] = useState<Array<Caracter>>([]);
  const [isNextPage, setIsNextPage] = useState(false);
  
  useEffect(() => {
    api.get <IGetResult>(`?page=${pagination}`).then(({data}) => {
      setCaracters(data?.results);

      /**
       * Trata o retorno das páginas,
       * caso a page seja maior que a paginação irá esconder o button
       */
      setIsNextPage(data?.info?.pages > pagination)
    });
  }, [pagination]);


  return (
    <div className="bg-dark text-white">
      <NavbarComponent />
      <div className='next__page'>
        <PaginationComponent
         pagination={pagination}
          setPagination={setPagination}
          isNextPage={isNextPage}
         />
      </div>
      <div className='characters__page'>
      <CharactersComponent characters = {caracters}/> 
      </div>
    </div>
  );
}

export default App;
