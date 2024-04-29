import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setFilm(data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, []);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <ul>
      {film.map((film, index) => {
          return <li key={index}>{film.title} - {film.year}</li>
      })}
      </ul>
    </>
  )
}

export default App
