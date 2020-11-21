import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { AnimatePresence, motion } from "framer-motion";
import { Container, Button, ButtonContainer } from "./Modal.styles";
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
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isToggled && (
        <div id="app" className={theme}>
          <Container>
            <motion.div
              initial={{ opacity: 0, width: "75%" }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              duration={1}
            >
              <CategoryTitle title={title}></CategoryTitle>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 30 }}
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
        </div>
      )}
    </AnimatePresence>,
    document.querySelector("#modal")
  );
};
const mapStateToProps = (state) => ({
  theme: state.displayTheme,
});
export default connect(mapStateToProps)(Modal);
