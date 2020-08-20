import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isSecretSequence } from "../../redux/actions/index";
import UseWidth from "../../hooks/useWidth.hooks";
import { Img } from "./Logo.styles";
const Logo = (props) => {
  const [sequences, setSequences] = useState([]);
  const [secretSequences] = useState([81, 87, 69, 65, 83, 68]);
  const width = UseWidth().width;

  useEffect(() => {
    const onKeyDown = (e) => {
      setSequences((value) => [...value, e.keyCode]);

      if (
        sequences.length === 6 &&
        sequences.toString() === secretSequences.toString()
      ) {
        props.secretSequence(!props.x);

        setSequences([]);
      }
      if (sequences.length === 6) {
        setSequences([]);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [sequences]);

  return (
    <Link to="/">
      <div>
        <Img
          width={width}
          src={require("../../assets/images/logo.png")}
          alt=""
        />
      </div>
    </Link>
  );
};
const mapStateToProps = (state) => ({
  x: state.isSecretSequence,
});
export default connect(mapStateToProps, {
  secretSequence: (bool) => isSecretSequence(bool),
})(Logo);
