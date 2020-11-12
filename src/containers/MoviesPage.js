import React from 'react'
import { Route } from 'react-router-dom'
import MoviesList from '../components/MoviesList'
import MovieShow from '../components/MovieShow'

// match argument lets us access the path information...
// in routerProps passed down from App.js
// Route component will render MovieShow when a movie is selected
// also a default Route component for /movies
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route
      exact path={match.url}
      render={() => <h3>Choose a movie above</h3>}
    />
    <Route
      path={`${match.url}/:movieId`}
      render={routerProps =>
        <MovieShow {...routerProps} movies={movies} />
      }
    />
  </div>
)

export default MoviesPage
