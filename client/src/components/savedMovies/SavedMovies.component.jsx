import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "./SavedMovies.styles";
import { fetchMovieByIds } from "../../redux/actions/index";
import MovieListHome from "../MovieListCategory/MovieListCategory.component";
import Card from "../card/Card.jsx";
const SavedMovies = ({ movieIds, fetchMovieByIds }) => {
  const [movies, setMovies] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(movieIds);
  //     const savedMovies = await fetchMovieByIds(movieIds);
  //     setMovies(savedMovies);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <MovieListHome category="saved movies" />
    </>
  );
};
const mapStateToProps = (state) => ({
  movieIds: state.fetchUserData.savedMovies,
});
export default connect(mapStateToProps, {
  fetchMovieByIds,
})(SavedMovies);
