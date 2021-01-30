import React, { useState } from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Container, HandleBars } from "./Hamurger.styles";
import { setHamburgerOpen } from "../../redux/actions/index";
import Navigation from "../Navigation/Navigation.component";
const Hamburger = ({ setHamburgerOpen, isHamburgerOpen }) => {
  const handleClick = () => {
    setHamburgerOpen();
  };
  console.log(isHamburgerOpen);

  return (
    <Container onClick={handleClick}>
      {/* <Container onClick={() => setOpen((val) => !val)}> */}
      <HandleBars isOpen={isHamburgerOpen}>
        <AnimatePresence>
          {isHamburgerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Navigation setOpen={isHamburgerOpen}></Navigation>
            </motion.div>
          )}
        </AnimatePresence>
      </HandleBars>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  isHamburgerOpen: state.isHamburgerOpen,
});
export default connect(mapStateToProps, {
  setHamburgerOpen: setHamburgerOpen,
})(Hamburger);
