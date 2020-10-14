import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveMovie, removeSavedMovie } from "../../redux/actions/index";
import { Container } from "./SaveMovie.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const SaveMovie = ({ saveMovie, savedMovies, removeSavedMovie, movieId }) => {
  const [movies, setMovies] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (savedMovies) {
      const isSavedMovie = Boolean(
        savedMovies.find((movie) => {
          return Number(movie) === movieId;
        })
      );

      setIsSaved(isSavedMovie);
    }
    setMovies(savedMovies);
  }, [savedMovies]);

  const handleClick = async () => {
    if (!isSaved) {
      setDisabled(true);
      await saveMovie(movieId);
      setIsSaved(true);

      setDisabled(false);
    } else {
      setDisabled(true);
      await removeSavedMovie(movieId);

      setIsSaved(false);
      setDisabled(false);
    }
  };
  const styles = {
    height: "3rem",
    width: "3rem",
    color: isSaved ? "red" : "white",
  };

  return (
    <button disabled={isDisabled} onClick={handleClick}>
      <Container>
        <FontAwesomeIcon icon={faHeart} style={styles} />
      </Container>
    </button>
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
