import React from "react";
import { ButtonContainer } from "./button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCoffee } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/images/google.svg";

const Button = (props) => {
  const renderButton = () => {
    switch (props.icon) {
      case "search":
        return (
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: "5px" }} />
        );
      case "google":
        return (
          <span
            style={{ width: "1.5rem", height: "1.5rem", marginRight: "1rem" }}
          >
            <img src={google} alt="google" />
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <ButtonContainer
      width={props.width}
      padding={props.padding}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      {renderButton()}

      {props.title}
    </ButtonContainer>
  );
};
export default Button;
