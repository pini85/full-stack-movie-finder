import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTrailers } from "../../redux/actions/index";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal.component";
import Carousel from "../carousel/carousel.component";
import useWidth from "../../hooks/useWidth.hooks";
import {
  TrailerContainer,
  TrailerPlay,
  YouTubeContainer,
} from "./Trailer.styles";

const Trailer = ({ poster, fetchTrailers, trailers, colors }) => {
  const width = useWidth().width;

  const [isToggled, setToggled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (isToggled) {
        setLoading(true);
        await fetchTrailers();
        setLoading(false);
      }
    };
    fetchData();
  }, [isToggled, fetchTrailers]);
  const trailersYouTube = () => {
    const optsYouTube = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      trailers &&
      trailers.map((trailer) => {
        return (
          <YouTubeContainer width={width}>
            <YouTube videoId={trailer.key} opts={optsYouTube} />
          </YouTubeContainer>
        );
      })
    );
  };
  const handleClick = (e) => {
    setToggled(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <TrailerContainer poster={poster}>
        <TrailerPlay
          color={colors.darkVibrant}
          vibrant={colors.vibrant}
          onClick={handleClick}
        />
      </TrailerContainer>
      {isToggled && (
        <Modal skew={true} isToggled={isToggled} setToggled={setToggled}>
          <Carousel
            items={trailersYouTube()}
            type="trailers"
            slidesToShow={1}
            slidesToScroll={1}
            autoPlay={false}
            fade={true}
            color="var(--primary-color)"
          ></Carousel>
          {isLoading ? (
            <FontAwesomeIcon
              icon={faFilm}
              style={{ fontSize: "10rem", color: "red" }}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  trailers: state.trailers,
  colors: state.displayMovie.colors,
});

export default connect(mapStateToProps, {
  fetchTrailers: fetchTrailers,
})(Trailer);
