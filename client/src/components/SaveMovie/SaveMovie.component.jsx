import React from "react";
import { connect } from "react-redux";
import { saveMovie } from "../../redux/actions/index";
import { Container } from "./SaveMovie.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const SaveMovie = ({ saveMovie, movieId }) => {
  return (
    <Container onClick={() => saveMovie(movieId)}>
      <FontAwesomeIcon
        icon={faHeart}
        style={{ height: "3rem", width: "3rem" }}
      />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  movieId: state.selectedMovie.id,
});
export default connect(mapStateToProps, {
  saveMovie: (id) => saveMovie(id),
})(SaveMovie);
