import React from 'react'
import {Link} from 'react-router-dom'

// using object detructuring to get to movies directly...
// instead of writing props.movies in multiple places
const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <div>
      <Link
        key={movieID}
        to={`/movies/${movieID}`}>
          {movies[movieID].title}
      </Link>
    </div>
  )

  return (
    <div>
      {renderMovies}
    </div>
  )

}

export default MoviesList
