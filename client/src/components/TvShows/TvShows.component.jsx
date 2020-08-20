import React from "react";
import Category from "../Category/Category.component";
const TvShows = () => {
  const options = [
    {
      title: "latest tv shows",
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
      <Category title="tv shows" options={options} />
    </>
  );
};
export default TvShows;
