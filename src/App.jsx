import React from 'react'

// https://github.com/adrianhajdin/react-movies/tree/main

const App = () => {
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
      <p>Search</p>
  </div>
    </main>
  )
}

export default App