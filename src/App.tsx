import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/views/navbar-component/NavbarComponent';
import api from './components/services/api';
import Cards from './components/views/cards-component/Cards';

export const App = () => {
  const [pages, setPages]: any = useState<any[]>([])
  
  useEffect(() => {
    api.get(`?page=${pages}`).then(({data}) => {
      setPages(data?.results);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(pages);
  return (
    <div className="App">
      <Navbar />
      <Cards characters={pages}/>
    </div>
  );
}

export default App;
