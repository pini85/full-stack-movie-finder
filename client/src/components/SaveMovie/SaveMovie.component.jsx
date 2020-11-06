import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveMovie, removeSavedMovie } from "../../redux/actions/index";
import { Container } from "./SaveMovie.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const SaveMovie = ({
  saveMovie,
  savedMovies,
  removeSavedMovie,
  movieId,
  movieIdFromCard,
  isCard,
}) => {
  const [movies, setMovies] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  //

  useEffect(() => {
    const id = isCard ? movieIdFromCard.toString() : movieId.toString();

    if (savedMovies) {
      const isSavedMovie = savedMovies.includes(id);

      setIsSaved(isSavedMovie);
    }
    setMovies(savedMovies);
  }, [savedMovies]);

  const handleClick = async () => {
    const id = movieIdFromCard || movieId;

    if (!isSaved) {
      setDisabled(true);
      await saveMovie(id);
      setIsSaved(true);

      setDisabled(false);
    } else {
      setDisabled(true);

      await removeSavedMovie(id);

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
    <Container>
      <button
        style={{
          outline: "none",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        disabled={isDisabled}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faHeart} style={styles} />
      </button>
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
      movieId: state.selectedMovie && state.selectedMovie.id,
      savedMovies: state.fetchUserData && state.fetchUserData.savedMovies,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, {
  saveMovie: (id) => saveMovie(id),
  removeSavedMovie: (id) => removeSavedMovie(id),
})(SaveMovie);
