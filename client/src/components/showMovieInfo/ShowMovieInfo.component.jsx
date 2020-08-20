import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import CirclePercentage from "../CirclePercentage/CirclePercentage.component";

import styled from "styled-components";

const Container = styled.div`
  color: ${(props) => props.color};
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  text-align: center;
  height: fit-content;
  margin-top: 3rem;
  border-radius: 8px;
  padding: 2rem 4rem;
  color: ${(props) => props.color};
  @media screen and (max-width: 500px) {
    padding: 2rem 4rem 1rem 4rem;
    width: 100vw;
  }
`;

const TitleContainer = styled.div`
  font-weight: 700;
  font-size: var(--heading-secondary);
`;

const GenreContainer = styled.div`
  font-size: 1.7rem;
`;
const YearContainer = styled.div`
  font-size: var(--paragraph);
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const ReviewItem = styled.div`
  margin: 0.5rem 1rem 0rem 1rem;
  color: ${(props) => props.color};
  font-weight: 700;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  height: 6rem;
  width: 8rem;
  border-radius: 10px;
`;

const Image = styled.img`
  height: 2rem;
  width: 3rem;
  filter: opacity(0.5);
`;

const CircleRating = styled.div`
  position: relative;
  background: yellow;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  z-index: 2;
  &::before {
    position: absolute;
    content: "";
    top: 5%;
    left: 5%;
    height: 200%;
    width: 200%;
    z-index: 1;

    background: red;
  }
`;
const ReviewValueContainer = styled.div`
  font-size: 1.5rem;
`;
const ShowMovieInfo = ({ colors, movie }) => {
  return (
    <Container color={colors.lightVibrant}>
      <TitleContainer>
        {movie.title} ({movie.year})
      </TitleContainer>
      <GenreContainer>
        {movie.genre}
        &nbsp;<span>&#124;</span>&nbsp;
        {movie.runTime}min <span>&#124;</span>&nbsp;
        {movie.language}
      </GenreContainer>

      <ReviewContainer color={colors.vibrant}>
        {movie.ratings &&
          movie.ratings.map((rate) => {
            console.log(rate);

            return (
              <a href={rate.url} target="blank">
                <ReviewItem color={colors.vibrant}>
                  <Image src={rate.img} alt="" />
                  <ReviewValueContainer>
                    {rate.rating ? rate.rating.Value : rate.imdb.Value}
                  </ReviewValueContainer>
                </ReviewItem>
              </a>
            );
          })}
        <CirclePercentage rating={movie.tmdbRating * 10} />
      </ReviewContainer>
    </Container>
  );
};

const mapsTateToProps = (state) => ({
  movie: state.displayMovie,
  colors: state.displayMovie.colors,
});

export default connect(mapsTateToProps)(ShowMovieInfo);
