import { connect } from "react-redux";
import { displayTheme } from "../redux/actions";

const replaceTheme = (theme) => displayTheme(theme);

export default connect(null, {
  displayTheme: (theme) => displayTheme(theme),
})(replaceTheme);
