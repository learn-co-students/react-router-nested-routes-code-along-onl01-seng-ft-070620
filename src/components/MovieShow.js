import React from 'react'

// match will contain all the parameters from the URL
// the parameters are stored as k-v pairs in match.params
const MovieShow = ({ match, movies }) => {
  return (
    <div>
      <h3>
        { movies[match.params.movieId].title }
      </h3>
    </div>
  )
}

export default MovieShow
