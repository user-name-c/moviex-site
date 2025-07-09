import React, { useEffect, useState } from 'react'
import Search from './components/Search'

// https://github.com/adrianhajdin/react-movies/tree/main

const API_BASE_URL= 'https://api.themoviedb.org/3/';

const API_KEY= import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS={
  method:'GET',
  headers:{accept:'aplication/json', Authorization:`Bearer ${API_KEY}`}
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const[errorMessage, setErrorMessage] = useState('');
  
  const fetchMovies = async() => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      alert(response);
     // throw new Error('failed to fetch movies');
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    }
  }

  useEffect(()=>{
    fetchMovies();
  },[]);

  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'> 
      <header>
        <img src='./hero-img.png' alt='Hero Banner'/>
        <h1>
          Find <span className='text-gradient'>Movies</span> You'll enjoy Without the Hassle
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>

      <section className='all-movies'>
        <h2>All movies</h2>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </section>
      <h1 className='text-white'>{searchTerm}</h1>

  </div>
    </main>
  )
}

export default App