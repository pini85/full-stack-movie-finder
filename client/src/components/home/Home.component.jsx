import React, { useEffect } from "react";
import { Container, CarouselContainer, Header, Paragraph } from "./Home.styles";
import { connect } from "react-redux";
import {
  fetchMovieSlider,
  fetchNewestMovies,
  fetchHighestRatedMovies,
} from "../../redux/actions";

import Carousel from "../carousel/carousel.component";
import Options from "../Options/Options.component";
import MovieListHome from "../MovieListCategory/MovieListCategory.component";

const Home = (props) => {
  useEffect(() => {
    props.movieSlider();
  }, []);

  const showList = () => {
    switch (props.optionActive) {
      case 1:
        return <MovieListHome category="newest movies" />;
      case 2:
        return <MovieListHome category="highest rating" />;
      case 3:
        return (
          <h1
            style={{ color: "white", textAlign: "center", fontWeight: "700" }}
          >
            COMING SOON
          </h1>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <CarouselContainer>
        <Carousel
          type="movieSlider"
          slidesToShow={1}
          slidesToScroll={1}
          autoPlay={true}
          fade={true}
          color="var(--primary-color)"
          activeDotColor="var(--primary-color)"
          dotsColor="white"
        ></Carousel>
      </CarouselContainer>

      <div style={{ width: "100%" }}>
        <Header>Welcome to Movie Finder</Header>
        <Paragraph>Discover and watch</Paragraph>
      </div>
      <Options />

      {showList()}
    </Container>
  );
};
const mapStateToDispatch = {
  newestMovies: (page) => fetchNewestMovies(page),
  movieSlider: fetchMovieSlider,
  highestRatedMovies: (page) => fetchHighestRatedMovies(page),
};
const mapStateToProps = (state) => ({
  newestMoviesData: state.newestMovies,
  movieSliderData: state.movieSliderData,
  highestRatedMoviesData: state.highestRatedMovies,
  optionActive: state.optionActive,
});

export default connect(mapStateToProps, mapStateToDispatch)(Home);
