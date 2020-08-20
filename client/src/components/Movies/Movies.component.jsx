import React from "react";
import { connect } from "react-redux";

import Category from "../Category/Category.component";

const Movies = () => {
  const options = [
    {
      title: "latest movies",
      dataType: 1,
      url: "latest",
    },
    {
      title: "highest rating",
      dataType: 2,
      url: "top",
    },
  ];
  return (
    <>
      <Category title="movies" options={options} movies={true} />
    </>
  );
};

export default Movies;
