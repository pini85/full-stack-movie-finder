import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import Carousel from "../carousel/carousel.component";
import { Container } from "./Reviews.styles";

import {} from "./Reviews.styles";
const Reviews = ({ colors, isSecretSequence }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: `${isSecretSequence ? "70%" : "100%"}` }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container
          borderColor={colors.vibrant}
          fontColor={colors.darkMuted}
          secretSequence={isSecretSequence}
        >
          <Carousel
            type="reviews"
            color={colors.vibrant}
            slidesToShow={1}
            slidesToScroll={1}
            fade={true}
          />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};
const mapStateToProps = (state) => ({
  reviews: state.displayMovie.reviews,
  colors: state.displayMovie.colors,
  isSecretSequence: state.isSecretSequence,
});
export default connect(mapStateToProps)(Reviews);
