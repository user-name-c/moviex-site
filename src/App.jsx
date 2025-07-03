import React, { useState } from 'react'
import Search from './components/Search'

// https://github.com/adrianhajdin/react-movies/tree/main

const App = () => {
  const [searchTerm, setSearchTerm] = useState('batman');
  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'> 
      <header>
        <img src='./hero-img.png' alt='Hero Banner'/>
        <h1>
          Find <span className='text-gradient'>Movies</span> You'll enjoy Without the Hassle
        </h1>
      </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
  </div>
    </main>
  )
}

export default App