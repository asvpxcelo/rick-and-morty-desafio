import React, { useEffect, useState } from 'react';
import './App.css';
import NavbarComponent from './components/views/navbar-component/NavbarComponent';
import api from './components/services/api';
import CharactersComponent from './components/views/cards-component/CharactersComponent';
import PaginationComponent from './components/views/pagionation-component/PaginationComponent';

export const App = () => {
  const [pages, setPages]: any = useState<any[]>([])
  
  useEffect(() => {
    api.get(`?page=${pages}`).then(({data}) => {
      setPages(data?.results);
    });
  }, []);
  return (
    <div className="bg-dark text-white">
      <NavbarComponent />
      <div className='next__page'>
        <PaginationComponent  setPages= {pages}/>
      </div>
      <div className='characters__page'>
      <CharactersComponent characters={pages}/>
      </div>
      
    </div>
  );
}

export default App;
