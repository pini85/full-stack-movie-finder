import React from "react";
import { TrailerContainer } from "./Carousel.styles";
import YouTube from "react-youtube";
import "./carousel.styles.css";
import { connect } from "react-redux";
import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
import MovieCastCarousel from "../MovieCastCarousel/MovieCastCarousel.component";
import ReviewsCarousel from "../ReviewsCarousel/ReviewsCarousel.component";
import { CarouselStyling } from "./Carousel.styles";
import useWidth from "../../hooks/useWidth.hooks";
const Carousel = ({
  type,
  trailers,
  movies,
  reviews,
  movieCast,
  slidesToShow,
  slidesToScroll,
  autoplay,
  fade,
  color,
  activeDotColor,
  dotColor,
}) => {
  const width = useWidth().width;
  const optsYouTube = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: 4000,
    fade: fade,
    pauseOnHover: true,
    lazyLoad: true,
  };

  const category = () => {
    switch (type) {
      case "trailers":
        return (
          trailers &&
          trailers.map((trailer) => {
            return (
              <div key={trailer.id}>
                <TrailerContainer width={width}>
                  <YouTube videoId={trailer.key} opts={optsYouTube} />
                </TrailerContainer>
              </div>
            );
          })
        );
      case "movieSlider":
        return (
          movies &&
          movies.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieSlider movie={movie}></MovieSlider>
              </div>
            );
          })
        );
      case "movieCast":
        return (
          movieCast &&
          movieCast.map((cast) => {
            return (
              <MovieCastCarousel
                name={cast.name}
                profile={cast.profile_path}
                character={cast.character}
              />
            );
          })
        );
      case "reviews":
        return (
          reviews &&
          reviews.results.map((review) => {
            return (
              <ReviewsCarousel
                author={review.author}
                content={review.content}
              />
            );
          })
        );
      default:
        return null;
    }
  };

  return (
    <>
      <CarouselStyling
        color={color}
        activeDotColor={activeDotColor}
        dotColor={dotColor}
      >
        <Slider {...settings}>{category()}</Slider>
      </CarouselStyling>
    </>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movieSlider,
  trailers: state.trailers,
  reviews: state.displayMovie ? state.displayMovie.reviews : null,
});

export default connect(mapStateToProps)(Carousel);
