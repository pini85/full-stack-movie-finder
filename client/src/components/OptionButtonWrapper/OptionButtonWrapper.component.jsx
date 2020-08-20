import React from "react";
import { Wrapper } from "./OptionButtonWrapper.styles";
const OptionButtonWrapper = ({ textColor, color1, color2, children }) => {
  return (
    <Wrapper textColor={textColor} color1={color1} color2={color2}>
      {children}
    </Wrapper>
  );
};
export default OptionButtonWrapper;
