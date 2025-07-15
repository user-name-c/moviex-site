import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <img 
            alt={movie.title} 
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: '/no-movie.png'} 
        />
        <div>
            <h3 key={movie.id} className='mt-4'>
                {movie.title}
            </h3>
            <div className='content'>
                <div className='rating'>
                    <img src="star.svg" alt="Star Icon"/>
                    <p>{movie.vote_average ? movie.vote_average.toFixed(1):'N/A'}</p>
                </div>
                <span>•</span>
            </div>

        </div>
    </div>
  )
}

export default MovieCard