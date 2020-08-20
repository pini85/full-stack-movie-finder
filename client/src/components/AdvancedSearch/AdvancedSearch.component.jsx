import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  Container,
  TopSearchContainer,
  BottomSearchContainer,
  SearchContainer,
  AdvancedSearchResultContainer,
  ButtonContainer,
  Divider,
} from "./AdvancedSearch.styles";
import {
  fetchGenres,
  createAdvancedSearch,
  fetchAdvancedSearch,
  showSearchResults,
} from "../../redux/actions/index";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";
import findGenreWithId from "../../utlis/findGenreWithId";
import Cast from "../Cast/Cast.component";
import SelectInput from "../SelectInput/SelectInput.component";
import AdvancedSearchResult from "../advancedSearchResult/AdvancedSearchResult.component";
import AdvancedSearchSaved from "../AdvancedSearchSaved/AdvancedSearchSaved.component";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";

import Button from "../Button/Button";

const AdvancedSearch = (props) => {
  const [createYears, setCreateYears] = useState(null);
  const [createRating, setCreateRating] = useState(null);
  const [createGenres, setCreateGenres] = useState(null);
  const [createRunTime, setCreateRunTime] = useState(null);
  const [createVoteCount, setCreateVoteCount] = useState(null);
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [rating, setRating] = useState("");
  const [voteCount, setVoteCount] = useState("");
  const [genres, setGenres] = useState("");
  const [displayGenre, setDisplayGenre] = useState("");
  const [runTime, setRunTime] = useState("");
  const [actors, setActors] = useState("");
  const [actorsArray, setActorsArray] = useState([]);
  const [castActorsOption, setCastActorsOption] = useState(null);
  const [directors, setDirectors] = useState("");
  const [directorsArray, setDirectorsArray] = useState([]);
  const [castDirectorsOption, setCastDirectorsOption] = useState(null);
  const [writers, setWriters] = useState("");
  const [writersArray, setWritersArray] = useState([]);
  const [castWritersOption, setCastWritersOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await props.fetchGenres();
    };
    fetchData();

    let years = [];
    for (let i = new Date().getFullYear(); i > 1902; i--) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    setCreateYears(years);

    let rating = [];
    for (let i = 9; i >= 0; i--) {
      rating.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    setCreateRating(rating);

    let voteCount = [];
    for (let i = 0; i < voteCounts.length; i++) {
      voteCount.push(
        <option key={i} value={voteCounts[i]}>
          {voteCounts[i]}
        </option>
      );
    }
    setCreateVoteCount(voteCount);

    let runTime = [];
    const modifyRunTimeText = (runTimes) => {
      switch (runTimes) {
        case "Any run time":
          return runTimes;
        case 1:
          return `${runTimes} hour - 1.5 hours`;
        case 1.5:
          return `${runTimes} hours - ${runTimes + 0.5} hours`;
        case 2:
          return `${runTimes} hours - ${runTimes + 1} hours`;
        case 3:
          return `more than ${runTimes} hours`;
      }
    };

    for (let i = 0; i < runTimes.length; i++) {
      runTime.push(
        <option key={i} value={runTimes[i]}>
          {modifyRunTimeText(runTimes[i])}
        </option>
      );
    }
    setCreateRunTime(runTime);
  }, []);

  useDidUpdateEffect(() => {
    const type = findGenreWithId(props.genres, genres);
    setDisplayGenre(type);
  }, [genres]);

  useEffect(() => {
    let genres = [];
    if (props.genres) {
      for (let i = 0; i < props.genres.length; i++) {
        genres.push(
          <option key={i} value={props.genres[i].id}>
            {props.genres[i].name}
          </option>
        );
        setCreateGenres(genres);
      }
    }
  }, [props.genres]);
  const voteCounts = [
    20000,
    15000,
    10000,
    9000,
    8000,
    7000,
    6000,
    5000,
    4000,
    3000,
    2000,
    1000,
    500,
    100,
  ];
  const runTimes = ["Any run time", 1, 1.5, 2, 3];

  const handleOnChange = (e) => {
    const type = e.target.getAttribute("data-tag");
    const value = e.target.value;

    switch (type) {
      case "from-year":
        setFromYear(value);
        break;
      case "to-year":
        setToYear(value);
        break;
      case "rating":
        setRating(parseInt(value));
        break;
      case "vote-count":
        setVoteCount(parseInt(value));
        break;
      case "genres":
        setGenres(value);
        break;
      case "run-time":
        setRunTime(isNaN(value * 60) ? value : parseFloat(value) * 60);
        break;
      case "actors":
        setActors(value);
        break;
      case "directors":
        setDirectors(value);
        break;
      case "writers":
        setWriters(value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    let searchObj;
    // const editFromYear = `${fromYear}-01-01`;
    // const editToYear = `${toYear}-01-01`;
    if (props.displayAdvancedSearch) {
      searchObj = {
        fromYear: props.displayAdvancedSearch.search.fromYear,
        toYear: props.displayAdvancedSearch.search.toYear,
        rating: props.displayAdvancedSearch.search.rating,
        voteCun: props.displayAdvancedSearch.search.voteCount,
        genres: props.displayAdvancedSearch.search.genres,
        runTe: props.displayAdvancedSearch.search.runTime,
        actorsArray: {
          option: "or",
          values: props.displayAdvancedSearch.search.actors,
        },
        directorsArray: props.displayAdvancedSearch.search.directors,
        writersArray: props.displayAdvancedSearch.search.writers,
      };
    } else {
      searchObj = {
        fromYear: fromYear,
        toYear: toYear,
        rating,
        voteCount,
        genres,
        runTime,
        actorsArray: { option: castActorsOption, values: actorsArray },
        directorsArray: { option: castDirectorsOption, values: directorsArray },
        writersArray: { option: castWritersOption, values: writersArray },
      };
    }
    props.createAdvancedSearch(searchObj);
    props.fetchAdvancedSearch(1);
    props.showSearchResults("advanced-search");
    const createUrl = (obj) => {
      let url = "/advanced-search/";
      const fromY = searchObj.fromYear ? `fromYear=${searchObj.fromYear}` : "";
      const toY = searchObj.toYear ? `&toYear=${searchObj.toYear}` : "";
      const rating = searchObj.rating ? `&rating=${searchObj.rating}` : "";
      const voteCount = searchObj.voteCount
        ? `&vote-vount=${searchObj.voteCount}`
        : "";
      const genres = searchObj.genres ? `&generes=${searchObj.genres}` : "";
      const runTime = searchObj.runTime ? `&runTime=${searchObj.runTime}` : "";
      const actors = searchObj.actorsArray.values.length
        ? `&actors=${searchObj.actorsArray.values}`
        : "";
      const directors = searchObj.directorsArray.values.length
        ? `&directors=${searchObj.directorsArray.values}`
        : "";
      const writers = searchObj.writersArray.values.length
        ? `&writers=${searchObj.writersArray.values}`
        : "";

      url += `${fromY}${toY}${rating}${voteCount}${genres}${runTime}${actors}${directors}${writers}`;
      return url;
    };

    props.history.push(`${createUrl()}/page/1`);
    // /cars?color=blue&type=sedan&doors=4
  };

  const resetSearch = () => {
    setFromYear(null);
    setToYear(null);
    setRating(null);
    setVoteCount(null);
    setGenres(null);
    setRunTime(null);
    setActorsArray([]);
    setDirectorsArray([]);
    setWritersArray([]);
    setCastActorsOption(null);
    setCastDirectorsOption(null);
    setCastWritersOption(null);
  };

  return (
    <Container>
      <CategoryTitle title="advanced search" />
      <SearchContainer>
        <TopSearchContainer>
          <SelectInput
            value={fromYear}
            name="from-year"
            title="From"
            data={createYears}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={toYear}
            name="to-year"
            title="To"
            data={createYears}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={rating}
            name="rating"
            title="Minimum Rating"
            data={createRating}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={voteCount}
            name="vote-count"
            title="Minimum Votes"
            data={createVoteCount}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={genres}
            name="genres"
            title="Genres"
            data={createGenres}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={runTime}
            name="run-time"
            title="Minimum Runtime"
            data={createRunTime}
            handleOnChange={handleOnChange}
          />
        </TopSearchContainer>
        <BottomSearchContainer>
          <Cast
            type="Acting"
            placeholder="actors"
            advancedSearchValue={actors}
            advancedSearchSetValue={setActors}
            setCastArray={setActorsArray}
            setCastOption={setCastActorsOption}
          ></Cast>
          <Cast
            type="Directing"
            placeholder="directors"
            advancedSearchValue={directors}
            advancedSearchSetValue={setDirectors}
            setCastArray={setDirectorsArray}
            setCastOption={setCastDirectorsOption}
          ></Cast>
          <Cast
            type="Writing"
            placeholder="writers"
            advancedSearchValue={writers}
            advancedSearchSetValue={setWriters}
            setCastArray={setWritersArray}
            setCastOption={setCastWritersOption}
          ></Cast>
        </BottomSearchContainer>
      </SearchContainer>
      <ButtonContainer>
        <Button handleClick={handleSubmit} title="search"></Button>
      </ButtonContainer>

      <AdvancedSearchResultContainer>
        <AdvancedSearchResult
          fromYear={fromYear}
          toYear={toYear}
          rating={rating}
          voteCount={voteCount}
          runTime={runTime}
          genres={displayGenre}
          actors={actorsArray}
          directors={directorsArray}
          writers={writersArray}
          handleClick={resetSearch}
        />
        <Divider></Divider>
        <AdvancedSearchSaved></AdvancedSearchSaved>
      </AdvancedSearchResultContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  advancedSearch: state.advancedSearch,
  displayAdvancedSearch: state.displayUserAdvancedSearch,
});

const mapStateToDispatch = {
  fetchGenres: fetchGenres,
  createAdvancedSearch: createAdvancedSearch,
  fetchAdvancedSearch: fetchAdvancedSearch,
  showSearchResults: showSearchResults,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapStateToDispatch)
)(AdvancedSearch);
