// Importaciones
import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from './components/Pagination';

// Componente principal
function App() {

  // Hooks de estados para guardar en ellos los datos que recupero con las peticiones Fetch
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  // URL para realizar la petición a la API
  const initialUrl = "https://rickandmortyapi.com/api/character";

  // Petición con Fetch para realizar la petición a la API y obtener los resultados
  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(err => console.log(err))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  // Hook que ejecuta la función que realiza la petición Fetch al renderizar la página
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand={'Rick and Morty App'} />

      <div className='container mt-5'>
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext} 
        />
        <Characters characters={characters} />
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext} 
        />
      </div>
    </>
  );
}

export default App;
