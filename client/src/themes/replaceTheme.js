import { connect } from "react-redux";
import { displayTheme } from "../redux/actions";

const replaceTheme = (theme) => {
  displayTheme(theme);

  // document.getElementById("app").className = theme;
};

export default connect(null, {
  displayTheme: (theme) => displayTheme(theme),
})(replaceTheme);
