import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList.js";
import MovieShow from "./movieshow.js";

function MoviesPage({ movies }) {

  const match = useRouteMatch()

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
