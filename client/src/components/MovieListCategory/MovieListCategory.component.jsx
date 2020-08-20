import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  selectedMovie,
  fetchMovies,
  fetchNewestMovies,
  fetchHighestRatedMovies,
  isFetching,
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
        default:
          return null;
      }
    };
    fetchData();
  }, [props.category]);

  const iterate = (category) => {
    return (
      category &&
      category.results.map((item) => {
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
  newestMoviesData: state.newestMovies,
  highestRatedMoviesData: state.highestRatedMovies,
  movieSliderData: state.movieSliderData,
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  fetchMovies: (page) => fetchMovies(page),
  isFetching: (bool) => isFetching(bool),

  newestMovies: (page) => fetchNewestMovies(page),
  highestRatedMovies: (page) => fetchHighestRatedMovies(page),
})(MovieListCategory);
