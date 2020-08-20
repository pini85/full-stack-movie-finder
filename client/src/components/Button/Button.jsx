import React from "react";
import { ButtonContainer } from "./button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  return (
    <ButtonContainer
      width={props.width}
      padding={props.padding}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      {props.search ? (
        <FontAwesomeIcon icon={faSearch} style={{ marginRight: "5px" }} />
      ) : null}
      {props.title}
    </ButtonContainer>
  );
};
export default Button;
