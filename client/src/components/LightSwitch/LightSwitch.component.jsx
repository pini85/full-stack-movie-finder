import React, { useState } from "react";
import { connect } from "react-redux";
import { displayTheme } from "../../redux/actions/index";

import { Container } from "./LightSwitch.styles";

const LightSwitch = ({ displayTheme, theme }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((value) => !value);
    if (theme !== "dark-theme") {
      displayTheme("dark-theme");
    } else {
      displayTheme("default-theme");
    }
  };
  return (
    <Container
      toggle={toggle}
      style={{ color: "white" }}
      onClick={handleClick}
    ></Container>
  );
};
const mapStateToProps = (state) => ({
  theme: state.displayTheme,
});
export default connect(mapStateToProps, {
  displayTheme: (theme) => displayTheme(theme),
})(LightSwitch);
