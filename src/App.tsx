import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/views/navbar-component/NavbarComponent';
import api from './components/services/api';
import CharactersComponent from './components/views/cards-component/CharactersComponent';

export const App = () => {
  const [pages, setPages]: any = useState<any[]>([])
  console.log(pages, 'pages')
  
  useEffect(() => {
    api.get(`?page=${pages}`).then(({data}) => {
      setPages(data?.results);
    });
  }, []);
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <CharactersComponent characters={pages}/>
    </div>
  );
}

export default App;
