import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  selectedMovie,
  fetchMovies,
  fetchNewestMovies,
  fetchHighestRatedMovies,
  isFetching,
  fetchMovieByIds,
} from "../../redux/actions/index";

import Card from "../card/Card";
const MovieListCategory = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      switch (props.category) {
        case "newest movies":
          await props.newestMovies(1);
          props.isFetching(false);
          break;
        case "highest rating":
          props.highestRatedMovies(1);
          props.isFetching(false);
          break;
        case "saved movies":
          props.fetchMovieByIds(props.savedMovieIds);
          props.isFetching(false);

        default:
          return null;
      }
    };
    fetchData();
  }, [props.category]);

  const iterate = (category) => {
    console.log(category);
    return (
      category &&
      category.map((item) => {
        if (item === null) {
          return;
        }

        return (
          <div key={item.id}>
            <Card movie={item}></Card>
          </div>
        );
      })
    );
  };

  const displayCategory = () => {
    switch (props.category) {
      case "newest movies":
        return iterate(props.newestMoviesData);
      case "highest rating":
        return iterate(props.highestRatedMoviesData);
      case "saved movies":
        return iterate(props.savedMoviesData);
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
      >
        <div style={{ margin: "0 auto" }}></div>
      </div>
      <div style={styleDiv}>{displayCategory()}</div>
      <div style={{ margin: "0 auto" }}></div>
    </>
    //
  );
};
const mapStateToProps = (state) => ({
  fetchMoviesData: state.fetchMovies,
  optionActive: state.optionActive,
  newestMoviesData: state.newestMovies.results,
  highestRatedMoviesData:
    state.highestRatedMovies && state.highestRatedMovies.results,
  movieSliderData: state.movieSliderData,
  savedMovieIds: state.fetchUserData.savedMovies,
  savedMoviesData: state.userSavedMovies,
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  fetchMovies: (page) => fetchMovies(page),
  isFetching: (bool) => isFetching(bool),
  fetchMovieByIds: (ids) => fetchMovieByIds(ids),
  newestMovies: (page) => fetchNewestMovies(page),
  highestRatedMovies: (page) => fetchHighestRatedMovies(page),
})(MovieListCategory);
