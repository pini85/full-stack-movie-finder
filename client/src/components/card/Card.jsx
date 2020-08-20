import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { selectedMovieId, selectedMovie } from "../../redux/actions/index";
import Button from "../Button/Button";
import Spin from "../spinners/Spin/Spin.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  Year,
  Rating,
  TitleFront,
  TitleBack,
  Gradient,
  ButtonContainer,
} from "./Card.styles";

const Card = (props) => {
  const [isLoaded, setLoaded] = useState(false);

  const handleClick = () => {
    console.log("IM RUN TOO");

    props.selectedMovieId(props.movie.id);
    props.selectedMovie(props.movie);

    // props.history.push(`/movie/${props.movie.id}`);
  };
  const test = () => {
    setLoaded(true);
  };

  const image = () => {
    if (props.movie.poster_path === null) {
      return "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg";
    } else {
      return `http://image.tmdb.org/t/p/w185//${props.movie.poster_path}`;
    }
  };

  const title = (name) => {
    if (name.length > 17) {
      return name.slice(0, 16) + "...";
    }
    return name;
  };

  return (
    <CardContainer>
      {props.isFetching ? (
        <div style={{ display: "flex" }}>
          <Spin></Spin>
        </div>
      ) : (
        <CardInner>
          <CardFront onLoad={test} image={image}>
            <Year>
              {props.movie.release_date
                ? props.movie.release_date.substr(0, 4)
                : "N/A"}
            </Year>
            <Rating>
              <div style={{ marginRight: "5px", color: "orange" }}>
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>{props.movie.vote_average}</div>
            </Rating>
            <TitleFront> {title(props.movie.title)}</TitleFront>
          </CardFront>
          <CardBack image={image}>
            <Gradient>
              <ButtonContainer>
                <Link
                  style={{ outline: "none" }}
                  to={`/movie/${props.movie.id}`}
                  onClick={handleClick}
                >
                  <Button title="Details" />
                </Link>
              </ButtonContainer>
            </Gradient>
            <TitleBack> {title(props.movie.title)}</TitleBack>
          </CardBack>
        </CardInner>
      )}
    </CardContainer>
  );
};
const mapStatToProps = (state) => ({
  isFetching: state.isFetching,
});
export default compose(
  withRouter,
  connect(mapStatToProps, {
    selectedMovieId: selectedMovieId,
    selectedMovie: (movie) => selectedMovie(movie),
  })
)(Card);
