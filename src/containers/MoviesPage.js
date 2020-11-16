// .src/containers/MoviesPage.js
import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import MovieShow from "../components/MovieShow";

//match allows us to access the path information in routerProps that are passed in from App.js
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Choose a movie from the list above</h3>}
    />
    <Route
      path={`${match.url}/:movieId`}
      // component={<MovieShow movies={movies} />}
      render={(routerProps) => <MovieShow {...routerProps} movies={movies} />}
    />
  </div>
);

export default MoviesPage;
