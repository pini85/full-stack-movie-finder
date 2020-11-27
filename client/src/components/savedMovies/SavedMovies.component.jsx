import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "./SavedMovies.styles";
import { fetchMovieByIds } from "../../redux/actions/index";
import MovieListHome from "../MovieListCategory/MovieListCategory.component";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
const SavedMovies = ({ movieIds, fetchMovieByIds }) => {
  return (
    <>
      <CategoryTitle title="Saved Movies" />
      <MovieListHome category="saved movies" />
      {!movieIds.length > 0 && (
        <h1 style={{ textAlign: "center", color: "white", fontWeight: "700" }}>
          No saved movies
        </h1>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  movieIds: state.fetchUserData.savedMovies,
});
export default connect(mapStateToProps, {
  fetchMovieByIds,
})(SavedMovies);
