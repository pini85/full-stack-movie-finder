import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { selectedMovieId, selectedMovie } from "../../redux/actions/index";
import {
  Container,
  DetailContainer,
  Header,
  Plot,
} from "./MoveSliderInfo.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const MovieSliderInfo = (props) => {
  const handleClick = () => {
    props.selectedMovie(props.movie);
    props.selectedMovieId(props.movie.id);

    props.history.push(`/movie/${props.movie.id}`);
  };
  const plotDetails = (plot) => {
    if (plot.length > 200) {
      return plot.slice(0, 200) + "...";
    }
    return plot;
  };

  return (
    <Container>
      <Header>{props.movie.title}</Header>
      <Plot>{plotDetails(props.movie.overview)}</Plot>
      <DetailContainer>
        <a onClick={handleClick}>
          <Button title="Details" />
        </a>

        <div style={{ fontSize: "1.5rem" }}>
          <div style={{ marginBottom: "-3px" }}>
            {props.movie.release_date.slice(0, 4)}
          </div>
          <div style={{ marginTop: "-3px" }}>{props.movie.runTime} min</div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: "1.4rem",
              marginRight: "0.5rem",
              color: "orange",
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div style={{ fontSize: "1.4rem" }}>{props.movie.vote}</div>
        </div>
      </DetailContainer>
    </Container>
  );
};

export default compose(
  withRouter,
  connect(null, {
    selectedMovieId: (id) => selectedMovieId(id),
    selectedMovie: (movie) => selectedMovie(movie),
  })
)(MovieSliderInfo);
