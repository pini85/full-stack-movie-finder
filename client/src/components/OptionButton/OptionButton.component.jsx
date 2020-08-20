import React from "react";
import {} from "./OptionButton.styles";
import { Container } from "./OptionButton.styles";
const OptionButton = ({
  handleOptionClick,
  title,
  textColor,

  type,
}) => {
  return (
    <Container onClick={() => handleOptionClick(type)} textColor={textColor}>
      <div>{title}</div>
    </Container>
  );
};
export default OptionButton;
