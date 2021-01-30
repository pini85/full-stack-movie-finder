import React, { useState } from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Container, HandleBars } from "./Hamurger.styles";
import { toggleHamburger } from "../../redux/actions/index";
import Navigation from "../Navigation/Navigation.component";
const Hamburger = ({ setToggleHamburger, toggleHamburger }) => {
  const handleClick = (e) => {
    //prevent bubbling up to the app on click
    e.stopPropagation();
    setToggleHamburger();
  };

  return (
    <Container onClick={(e) => handleClick(e)}>
      {/* <Container onClick={() => setOpen((val) => !val)}> */}
      <HandleBars isOpen={toggleHamburger}>
        <AnimatePresence>
          {toggleHamburger && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Navigation setOpen={setToggleHamburger}></Navigation>
            </motion.div>
          )}
        </AnimatePresence>
      </HandleBars>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  toggleHamburger: state.toggleHamburger,
});
export default connect(mapStateToProps, {
  setToggleHamburger: toggleHamburger,
})(Hamburger);
