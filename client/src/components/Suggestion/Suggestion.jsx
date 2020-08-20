import React from "react";
import { Container, Img, IconAndYearContainer } from "./Suggestion.styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  selectedMovieId,
  movieSuggestions,
  search,
  fetchActorMovies,
  showSearchResults,
} from "../../redux/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import useWidth from "../../hooks/useWidth.hooks";

const Suggestion = (props) => {
  const width = useWidth().width;
  const handleClick = (type) => {
    props.movieSuggestions(false);
    props.setSearchQuery("");
    if (type === "movie") {
      props.selectedMovieId(props.item.id);
      props.history.push(`/movie/${props.item.id}`);
    } else {
      props.fetchActorMovies(props.item.name, 1);
      props.showSearchResults("actor");
      props.history.push(`/actors/${props.item.name}/page/1`);
    }
  };
  const renderContent = () => {
    if (props.item.known_for_department) {
      return (
        <div onClick={() => handleClick("cast")}>
          <Container type="actor" width={width}>
            <Img
              src={`http://image.tmdb.org/t/p/w92/${props.item.profile_path}`}
              alt=""
            />
            <div>
              <div> {props.item.name}</div>
              <IconAndYearContainer>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginBottom: "5px" }}
                />
                <div style={{ marginLeft: "1rem" }}>
                  {props.item.known_for_department === "Acting"
                    ? "Actor"
                    : "Director"}
                </div>
              </IconAndYearContainer>
            </div>
          </Container>
        </div>
      );
    } else {
      return (
        <div onClick={() => handleClick("movie")}>
          <Container width={width}>
            <Img
              src={`http://image.tmdb.org/t/p/w92/${props.item.poster_path}`}
              alt=""
            />

            <div>
              <div> {props.item.title}</div>
              <IconAndYearContainer>
                <FontAwesomeIcon icon={faFilm} />
                <div style={{ marginLeft: "1rem" }}>
                  {props.item.release_date
                    ? props.item.release_date.substr(0, 4)
                    : null}
                </div>
              </IconAndYearContainer>
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "orange", marginRight: "1rem" }}
                />
                {props.item.vote_average}
              </div>
            </div>
          </Container>
        </div>
      );
    }
  };

  return <>{renderContent()}</>;
};

export default compose(
  withRouter,
  connect(null, {
    selectedMovieId: selectedMovieId,
    search: search,
    movieSuggestions: movieSuggestions,
    fetchActorMovies: (name) => fetchActorMovies(name),
    showSearchResults: (type) => showSearchResults(type),
  })
)(Suggestion);
