import React from "react";
import { useParams } from "react-router-dom";
import MovieListSearch from "../MovieListSearch/MovieListSearch";
const ActorMovies = () => {
  const { name } = useParams();

  return (
    <div>
      <MovieListSearch name={name}></MovieListSearch>
    </div>
  );
};

export default ActorMovies;
