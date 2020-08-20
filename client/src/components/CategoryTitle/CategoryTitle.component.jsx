import React from "react";
import {
  Container,
  FirstLetterContainer,
  RestOfTitleContainer,
} from "./CategoryTitle.styles";

const CategoryTitle = ({ title }) => {
  const formatTitle = () => {
    const firstLetter = title.slice(0, 1);
    const restOfTitle = title.slice(1, title.length);
    return [firstLetter, restOfTitle];
  };
  formatTitle();

  return (
    <Container>
      <FirstLetterContainer>{formatTitle()[0]}</FirstLetterContainer>
      <RestOfTitleContainer>{formatTitle()[1]}</RestOfTitleContainer>
    </Container>
  );
};

export default CategoryTitle;
