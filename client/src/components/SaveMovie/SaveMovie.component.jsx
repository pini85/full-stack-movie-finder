import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveMovie, removeSavedMovie } from "../../redux/actions/index";
import { Container } from "./SaveMovie.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const SaveMovie = ({ saveMovie, savedMovies, removeSavedMovie, movieId }) => {
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    if (savedMovies) {
      const isSavedMovie = Boolean(
        savedMovies.find((movie) => {
          return Number(movie.movieId) === movieId;
        })
      );
      setIsSaved(isSavedMovie);
    }
  }, []);

  const handleClick = () => {
    if (!isSaved) {
      saveMovie(movieId);
      setIsSaved(true);
    } else {
      removeSavedMovie(movieId);
    }
  };
  const styles = {
    height: "3rem",
    width: "3rem",
    color: isSaved ? "red" : "white",
  };
  return (
    <Container onClick={handleClick}>
      <FontAwesomeIcon icon={faHeart} style={styles} />
    </Container>
  );
};
// const mapStateToProps = (state) => ({
//   if (state.fetchUserData.savedMovies) {
//     return { movieId: state.selectedMovie.id,
//       savedMovies: state.fetchUserData.savedMovies}

//   } else {
//     return {}
//   }
// });
const mapStateToProps = (state) => {
  if (state.fetchUserData) {
    return {
      movieId: state.selectedMovie.id,
      savedMovies: state.fetchUserData.savedMovies,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, {
  saveMovie: (id) => saveMovie(id),
  removeSavedMovie: (id) => removeSavedMovie(id),
})(SaveMovie);
