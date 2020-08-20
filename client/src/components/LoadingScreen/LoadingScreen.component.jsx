import React from "react";
import { connect } from "react-redux";
import BouncingDvd from "../spinners/BouncingDvd/BouncingDvd.component";
import Film from "../spinners/Film/Film.component";
import Spin from "../spinners/Spin/Spin.component";
import useWidth from "../../hooks/useWidth.hooks";
import { Container } from "./LoadingScreen.styles";
const LoadingScreen = ({ spinner }) => {
  const width = useWidth().width;

  const showOption = () => {
    switch (spinner) {
      case "dvd":
        return <BouncingDvd></BouncingDvd>;
      case "camera":
        return <Film></Film>;
      case "spin":
        return <Spin></Spin>;
      default:
        console.err("error", spinner);
    }
  };
  return <Container> {width < 1000 ? <Film /> : showOption()}</Container>;
};
const mapStateToProps = (state) => ({
  spinner: state.displaySpinner,
});
export default connect(mapStateToProps, null)(LoadingScreen);
