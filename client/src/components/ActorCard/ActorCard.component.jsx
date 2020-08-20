import React from "react";
import {
  Container,
  CardContainer,
  ImageContainer,
  DetailContainer,
  Img,
  Title,
} from "./ActorCard.styles";
const ActorCard = ({ actor, handleClick }) => {
  return (
    <Container onClick={() => handleClick(actor.name)}>
      <CardContainer>
        <ImageContainer>
          <Img
            src={`https://image.tmdb.org/t/p/w185//${actor.profile_path}`}
            alt={actor.name}
          />
        </ImageContainer>

        <DetailContainer>
          <Title>{actor.name}</Title>
        </DetailContainer>
      </CardContainer>
    </Container>
  );
};
export default ActorCard;
