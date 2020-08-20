import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Papa from "papaparse";
import {
  createPopularActors,
  fetchPopularActors,
} from "../../redux/actions/index";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
import DisplayPopularActors from "../DisplayPopularActors/DisplayPopularActors.component";

const PopularActors = (props) => {
  useEffect(() => {
    const actors = (data) => {
      let actors = {};
      let names = [];
      const actorsPerPage = 10;
      const totalPages = data && Math.round(data.length / actorsPerPage);
      actors.total_pages = totalPages;
      actors.total_results = data && data.length;

      for (let index in data) {
        names.push(data[index][0]);
      }
      let pageNumber = 1;
      for (let j = 1; j < names.length; j += actorsPerPage) {
        actors[pageNumber] = names.slice(j, j + 10);
        pageNumber++;
      }

      if (Object.keys(actors).length > 0 && actors.total_pages) {
        props.createPopularActors(actors);
        props.fetchPopularActors(1);
      }
    };

    actors();
    const parseData = (url, callBack) => {
      Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: (results) => {
          callBack(results.data);
        },
      });
    };
    parseData(
      "https://raw.githubusercontent.com/data-8/tutor/master/Week2/actors.csv",
      actors
    );
  }, []);

  return (
    <>
      <CategoryTitle title="popular actors" />
      {props.fetchPopularActorsData && <DisplayPopularActors />}
    </>
  );
};
const mapStateToProps = (state) => ({
  fetchPopularActorsData: state.fetchPopularActors,
});
export default connect(mapStateToProps, {
  createPopularActors: (actors) => createPopularActors(actors),
  fetchPopularActors: (page) => fetchPopularActors(page),
})(PopularActors);
