import React, { useState } from "react";
import { connect } from "react-redux";
import { saveUserAdvancedSearch, displayUserSearch } from "../../redux/actions";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";
import Modal from "../Modal/Modal.component";
import Input from "../Input/Input.component";

import {
  Container,
  Title,
  Result,
  ResultSpan,
  ButtonContainer,
  ModalContainer,
  ModalTitleContainer,
} from "./AdvancedSearchResult.styles";
import Button from "../Button/Button";

const AdvancedSearchResult = ({
  fromYear,
  toYear,
  rating,
  voteCount,
  runTime,
  genres,
  actors,
  directors,
  writers,
  handleClick,
  saveUserAdvancedSearch,
  displayUserSavedAdvancedSearch,
  displayUserSearch,
}) => {
  const [isSaved, setSaved] = useState(false);
  const [savedName, setSavedName] = useState("");
  useDidUpdateEffect(() => {}, [displayUserSavedAdvancedSearch]);

  const na = (query) => {
    if (!query) {
      return <ResultSpan>N/A</ResultSpan>;
    }
    return query;
  };

  const displayResults = (type) => {
    if (displayUserSavedAdvancedSearch) {
      switch (type) {
        case "fromYear":
          return na(displayUserSavedAdvancedSearch.search.fromYear);
        case "toYear":
          return na(displayUserSavedAdvancedSearch.search.toYear);
        case "rating":
          return na(displayUserSavedAdvancedSearch.search.rating);
        case "voteCount":
          return na(displayUserSavedAdvancedSearch.search.voteCount);
        case "runTime":
          return na(displayUserSavedAdvancedSearch.search.runTime);
        case "genres":
          return na(displayUserSavedAdvancedSearch.search.genres);
        case "actors":
          return displayUserSavedAdvancedSearch.search.actors.values;
        case "directors":
          return displayUserSavedAdvancedSearch.search.directors.values;
        case "writers":
          return displayUserSavedAdvancedSearch.search.writers.values;
        default:
          return null;
      }
    } else {
      switch (type) {
        case "fromYear":
          return na(fromYear);
        case "toYear":
          return na(toYear);
        case "rating":
          return na(rating);
        case "voteCount":
          return na(voteCount);
        case "runTime":
          return na(runTime);
        case "genres":
          return na(genres);
        case "actors":
          return actors;

        case "directors":
          return directors;
        case "writers":
          return writers;
        default:
          return null;
      }
    }
  };

  const handleSave = () => {
    setSaved(false);
    const obj = {
      active: true,
      search: {
        name: savedName,
        fromYear,
        toYear,
        rating,
        voteCount,
        runTime,
        genres,
        actors: {
          option: null,
          values: actors,
        },
        directors: {
          option: null,
          values: directors,
        },
        writers: {
          option: null,
          values: writers,
        },
      },
    };
    saveUserAdvancedSearch(obj);
  };

  return (
    <Container>
      {displayUserSavedAdvancedSearch ? <div>hi</div> : null}
      <Title>Search Information</Title>
      <div>
        From Year:<ResultSpan>{displayResults("fromYear")}</ResultSpan>
      </div>
      <div>
        To Year:<ResultSpan>{displayResults("toYear")}</ResultSpan>
      </div>
      <div>
        Minimum Rating:<ResultSpan>{displayResults("rating")}</ResultSpan>
      </div>
      <div>
        Minimum Votes: <ResultSpan>{displayResults("voteCount")}</ResultSpan>
      </div>
      <div>
        Run time: <ResultSpan>{displayResults("runTime")}</ResultSpan>
      </div>
      <div>
        Genre: <ResultSpan>{displayResults("genres")}</ResultSpan>
      </div>
      <div>
        Actors:
        {}
        {actors.length > 0 || displayUserSavedAdvancedSearch ? (
          displayResults("actors").map((actor) => <Result>{actor}</Result>)
        ) : (
          <ResultSpan>N/A</ResultSpan>
        )}
      </div>
      <div>
        Directors:
        {displayResults("directors").length > 0 ? (
          displayResults("directors").map((director) => (
            <Result> {director}, </Result>
          ))
        ) : (
          <ResultSpan>N/A</ResultSpan>
        )}
      </div>
      <div>
        Writers:
        {displayResults("writers").length > 0 ? (
          displayResults("writers").map((writer) => (
            <Result> {writer}, </Result>
          ))
        ) : (
          <ResultSpan>N/A</ResultSpan>
        )}
      </div>

      <ButtonContainer>
        <Button handleClick={handleClick} title="reset"></Button>
        <div style={{ margin: "0 2rem" }}></div>
        <Button handleClick={() => setSaved(true)} title="save"></Button>
      </ButtonContainer>
      <Modal isToggled={isSaved} setToggled={setSaved}>
        <ModalContainer>
          <ModalTitleContainer>What would be the name?</ModalTitleContainer>
          <Input
            handleOnChange={(e) => setSavedName(e.target.value)}
            value={savedName}
            placeholder="name"
          ></Input>
          <Button handleClick={handleSave} title="save"></Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  searchResult: state.userAdvancedSearches,
  savedSearches: state.savedAdvancedSearches,
  displayUserSavedAdvancedSearch: state.displayUserAdvancedSearch,
});
export default connect(mapStateToProps, {
  saveUserAdvancedSearch: (obj) => saveUserAdvancedSearch(obj),
  displayUserSearch: (search) => displayUserSearch(search),
})(AdvancedSearchResult);
