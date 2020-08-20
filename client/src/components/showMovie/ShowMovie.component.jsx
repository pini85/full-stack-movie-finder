import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
// import styled from "styled-components";
import { useParams } from "react-router-dom";
import { goToMovie } from "../../redux/actions/index";
import ShowMovieInfo from "../showMovieInfo/ShowMovieInfo.component";
import ShowTorrents from "../ShowTorrents/ShowTorrents.component";
import ShowSubtitles from "../ShowSubtitles/ShowSubtitles.component";
import ShowMagnets from "../ShowMagnets/ShowMagnets.component";
import OptionButton from "../OptionButton/OptionButton.component";
import OptionButtonWrapper from "../OptionButtonWrapper/OptionButtonWrapper.component";
import MovieCast from "../MovieCast/MovieCast.component";
import Trailer from "../Trailer/Trailer.component";
import Reviews from "../Reviews/Review.component";
import Modal from "../Modal/Modal.component";
import LoadingScreen from "../LoadingScreen/LoadingScreen.component";

import {
  Container,
  HeroContainer,
  TopContainer,
  MovieCard,
  TagLineContainer,
  BottomContainer,
  OptionsContainer,
  PlotContainer,
  MovieCastContainer,
  LeftSide,
  RightSide,
  ModalContainer,
} from "./ShowMovie.styles";

const ShowMovie = ({ item, colors, goToMovie, isSecretSequence }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [optionType, setOptionType] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await goToMovie(id);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  const handleOptionClick = (type) => {
    setToggled(true);
    setOptionType(type);
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  };
  const showOption = () => {
    switch (optionType) {
      case "torrent":
        return <ShowTorrents></ShowTorrents>;
      case "sub":
        return <ShowSubtitles></ShowSubtitles>;
      case "magnets":
        return <ShowMagnets></ShowMagnets>;
      default:
        return null;
    }
  };

  // const VibrantC = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.vibrant : "var(primary-color)"};
  // `;
  // const DarkVibrant = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.darkVibrant : "var(primary-color)"};
  // `;
  // const LightVibrant = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.lightVibrant : "var(primary-color-light)"};
  // `;
  // const Muted = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.muted : "var(secondary-color)"};
  // `;
  // const DarkMuted = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.darkMuted : "var(secondary-color"};
  // `;
  // const LightMuted = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.lightMuted : "var(secondary-color-light)"};
  // `;

  return (
    <>
      hi
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        item && (
          <Container color1={colors.darkMuted} color2={colors.muted}>
            <Trailer poster={item.poster} />
            {isToggled && (
              <Modal isToggled={isToggled} setToggled={setToggled}>
                <ModalContainer>{isToggled && showOption()}</ModalContainer>
              </Modal>
            )}

            <MovieCard color={colors.lightVibrant}>
              <HeroContainer poster={item.backdrop}>
                <TopContainer>
                  <ShowMovieInfo />
                </TopContainer>
              </HeroContainer>
              <BottomContainer>
                <LeftSide>
                  <PlotContainer
                    tagline={item.tagLine}
                    color={colors.darkVibrant}
                  >
                    {item.tagLine && (
                      <TagLineContainer>
                        <span>&ldquo;</span>
                        {item.tagLine}
                        <span>&rdquo;</span>
                      </TagLineContainer>
                    )}
                    <p>{item.plot}</p>
                  </PlotContainer>

                  <Reviews />
                  {/* <DirectorAndWriterContainer>
                  <div>Director: {item.director}</div>
                  <div>Writers: {item.writer}</div>
                </DirectorAndWriterContainer> */}
                </LeftSide>
                <RightSide>
                  <AnimatePresence>
                    {isSecretSequence && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <OptionsContainer>
                          <OptionButtonWrapper
                            textColor={colors.lightVibrant}
                            color1={colors.darkVibrant}
                            color2={colors.vibrant}
                          >
                            <OptionButton
                              handleOptionClick={handleOptionClick}
                              title="torrents"
                              type="torrent"
                            />
                            <OptionButton
                              handleOptionClick={handleOptionClick}
                              title="subtitles"
                              type="subtitles"
                            />
                            <OptionButton
                              handleOptionClick={handleOptionClick}
                              title="magnets"
                              type="magnets"
                            />
                          </OptionButtonWrapper>
                        </OptionsContainer>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </RightSide>
              </BottomContainer>
              {/* 
              <div style={{ display: "flex" }}>
                <DarkVibrant></DarkVibrant>
                <VibrantC></VibrantC>
                <LightVibrant></LightVibrant>
              </div>
              <div style={{ display: "flex" }}>
                <DarkMuted></DarkMuted>
                <Muted></Muted>
                <LightMuted></LightMuted>
              </div> */}
              <MovieCastContainer color={colors.lightVibrant}>
                <MovieCast />
              </MovieCastContainer>
            </MovieCard>
          </Container>
        )
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  if (state.displayMovie) {
    return {
      item: state.displayMovie,
      colors: state.displayMovie.colors,
      isSecretSequence: state.isSecretSequence,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, {
  goToMovie: goToMovie,
})(ShowMovie);
