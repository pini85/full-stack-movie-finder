import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  Container,
  Button,
  ButtonContainer,
  MainContainer,
} from "./Modal.styles";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
const Modal = ({
  isToggled,
  setToggled,
  setSpinners,
  setThemes,
  setOption,
  skew,
  children,
  title,
  theme,
  ...props
}) => {
  const handleClick = () => {
    setToggled(false);
    document.body.style.overflow = "auto";
    if (setSpinners || setThemes) {
      setSpinners(false);
      setThemes(false);
      setOption(null);
    }
  };
  console.log(props);
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isToggled && (
        <div id="app" className={theme}>
          <MainContainer onClick={handleClick}>
            <Container onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ opacity: 0, width: "75%" }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                duration={1}
              >
                <CategoryTitle title={title}></CategoryTitle>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: 30 }}
                >
                  <ButtonContainer
                    style={
                      !skew
                        ? { position: "absolute", right: "-78px", top: "-29px" }
                        : null
                    }
                  >
                    <Button onClick={handleClick}>
                      <div> &#215;</div>
                    </Button>
                  </ButtonContainer>

                  {children}
                </motion.div>
              </motion.div>
            </Container>
          </MainContainer>
        </div>
      )}
    </AnimatePresence>,
    document.querySelector("#modal")
  );
};
const mapStateToProps = (state) => ({
  theme: state.displayTheme,
});
export default compose(withRouter, connect(mapStateToProps))(Modal);
