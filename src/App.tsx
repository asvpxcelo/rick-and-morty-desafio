import React, { useEffect, useState } from 'react';
import './App.css';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import api from './services/api';
import CharactersComponent from './components/characters-component/CharactersComponent';
import PaginationComponent from './components/pagination-component/PaginationComponent';
import { ICaracter } from './interfaces/Caracters';

interface IGetResult {
  info: {
    count: number,
    next: string | null
    pages: number,
    prev: string | null
  },
  results: Array<ICaracter>
}

export const App = () => {
  const [pages, setPages] = useState<IGetResult["info"]>();
  const [caracters, setCaracters] = useState<Array<ICaracter>>([]);
  
  useEffect(() => {
    api.get <IGetResult>(`?page=${pages}`).then(({data}) => {
      setCaracters(data?.results);
    });
  }, []);

  const nextPage = () => {
    setPages((x) => pages)
  }
  
  return (
    <div className="bg-dark text-white">
      <NavbarComponent />
      <div className='next__page'>
        <PaginationComponent nextPage={nextPage}/>
      </div>
      <div className='characters__page'>
      <CharactersComponent characters = {caracters}/> 
      </div>
    </div>
  );
}

export default App;
