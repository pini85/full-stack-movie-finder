import React from "react";
import { connect } from "react-redux";

import {
  fetchNewestMovies,
  fetchHighestRatedMovies,
} from "../../redux/actions";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
import MovieListCategory from "../MovieListCategory/MovieListCategory.component";
import Option from "../Option/Option.component";
import Pagination from "../Pagination/Pagination.component";
import { Container, OptionContainer } from "./Category.styles";
const Category = ({
  movies,
  title,
  options,
  optionActive,
  fetchHighestRatedMovies,
  fetchNewestMovies,
  highestRatedMovies,
  newestMovies,
}) => {
  const showMovieList = () => {
    switch (optionActive) {
      case 1:
        return (
          <>
            <Pagination api={fetchNewestMovies} data={newestMovies} />
            <MovieListCategory category="newest movies" />
            <Pagination api={fetchNewestMovies} data={newestMovies} />
          </>
        );

      case 2:
        return (
          <>
            <Pagination
              api={fetchHighestRatedMovies}
              data={highestRatedMovies}
            />
            <MovieListCategory category="highest rating" />
            <Pagination
              api={fetchHighestRatedMovies}
              data={highestRatedMovies}
            />
          </>
        );
    }
  };

  const showTvList = () => {
    console.log("im invoked");

    return (
      <h1 style={{ color: "white", textAlign: "center", fontWeight: "700" }}>
        COMING SOON
      </h1>
    );
  };
  return (
    <Container>
      <CategoryTitle title={title}></CategoryTitle>

      <OptionContainer>
        {options.map((option) => {
          return (
            <Option
              title={option.title}
              dataType={option.dataType}
              changeUrl={true}
              changeUrlName={option.url}
            ></Option>
          );
        })}
      </OptionContainer>
      {movies ? showMovieList() : showTvList()}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  optionActive: state.optionActive,
  highestRatedMovies: state.highestRatedMovies,
  newestMovies: state.newestMovies,
});
export default connect(mapStateToProps, {
  fetchNewestMovies: (page) => fetchNewestMovies(page),
  fetchHighestRatedMovies: (page) => fetchHighestRatedMovies(page),
})(Category);
