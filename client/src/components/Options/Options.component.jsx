import React from "react";
import { connect } from "react-redux";
import {
  optionActive,
  fetchNewestMovies,
  fetchHighestRatedMovies,
} from "../../redux/actions";

import Option from "../Option/Option.component";
import { OptionsContainer } from "./Options.styles";

const Options = (props) => {
  return (
    <OptionsContainer>
      <Option title="newest movies" dataType={1}></Option>
      <Option title="highest rating" dataType={2}></Option>
      <Option title="recommended to you" dataType={3}></Option>
    </OptionsContainer>
  );
};

const mapStateToDispatch = {
  newestMovies: (page) => fetchNewestMovies(page),
  highestRatedMovies: (page) => fetchHighestRatedMovies(page),
  optionActive: optionActive,
};
const mapStateToProps = (state) => ({
  newestMoviesData: state.newestMovies,
  highestRatedData: state.highestRated,
  optionActiveData: state.optionActive,
});

export default connect(mapStateToProps, mapStateToDispatch)(Options);
