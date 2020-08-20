import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectedMovie,
  fetchMovies,
  fetchAdvancedSearch,
  fetchActorMovies,
  fetchPopularActors,
} from "../../redux/actions/index";
import Pagination from "../Pagination/Pagination.component";

import Card from "../card/Card";
const MovieListSearch = (props) => {
  const { query } = useParams();
  console.log(query);
  const movies = () => {
    const showMovies = (fetch, data, actor) => {
      return (
        <>
          <Pagination api={fetch} data={data} actor={actor} />
          <div style={styleDiv}>
            {data &&
              data.results.map((movie) => {
                if (movie === null) return;

                return (
                  <div key={movie.id}>
                    <Card movie={movie}></Card>
                  </div>
                );
              })}
          </div>

          <Pagination api={fetch} data={data} actor={actor} />
        </>
      );
    };
    switch (props.showSearchResults) {
      case "search":
        return showMovies(props.fetchMovies, props.fetchMoviesData);
      case "advanced-search":
        return showMovies(
          props.fetchAdvancedSearch,
          props.advancedSearchMoviesData
        );
      case "actor":
        return showMovies(
          props.fetchActorMovies,
          props.actorsMoviesData,
          query
        );
      default:
        return null;
    }
  };

  const styleDiv = {
    display: "flex",
    flexdirection: "column",

    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    background: "var(--secondary-color)",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "var(--secondary-color)",
        }}
      ></div>
      {movies()}
    </>
    //
  );
};
const mapStateToProps = (state) => ({
  fetchMoviesData: state.fetchMovies,
  advancedSearchMoviesData: state.fetchAdvancedSearch,
  actorsMoviesData: state.fetchActorMovies,
  fetchPopularActorsData: state.fetchPopularActors,
  showSearchResults: state.showSearchResults,
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  fetchMovies: (page) => fetchMovies(page),
  fetchAdvancedSearch: (page) => fetchAdvancedSearch(page),
  fetchActorMovies: (id, page) => fetchActorMovies(id, page),
  fetchPopularActors: (page) => fetchPopularActors(page),
})(MovieListSearch);
