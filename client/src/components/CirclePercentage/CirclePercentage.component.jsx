import React from "react";
import { connect } from "react-redux";

import "./styles.css";

const CirclePercentage = ({ colors, rating }) => {
  console.log(colors);

  return (
    <div
      style={{
        backgroundColor: colors.darkVibrant,
        color: colors.darkVibrant
      }}
      className="circle-wrap"
    >
      <div className="circle">
        <div className="mask full">
          <div
            style={{ backgroundColor: colors.vibrant }}
            className="fill"
          ></div>
        </div>

        <div className="mask half">
          <div
            style={{ backgroundColor: colors.vibrant }}
            className="fill"
          ></div>
        </div>

        <div className="inside-circle">
          {rating}%
          <div
            style={{ backgroundColor: colors.lightVibrant }}
            className="inside-circle-background"
          ></div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  colors: state.displayMovie.colors
});
export default connect(mapStateToProps)(CirclePercentage);
