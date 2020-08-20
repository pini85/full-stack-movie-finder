import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, TextContainer } from "./ReviewsCarousel.styles";
import { connect } from "react-redux";
import { ContentContainer } from "./ReviewsCarousel.styles";

const ReviewsCarousel = ({ author, content, color }) => {
  console.log(color);

  const [exposedText, setExposedText] = useState(null);
  const [hiddenText, setHiddenText] = useState(null);
  const [isHidden, setHidden] = useState(true);
  useEffect(() => {
    if (author === "msbreviews") {
      setExposedText(content.slice(97, 497));
      setHiddenText(content.slice(498));
    }
    setExposedText(content.slice(0, 410));
    setHiddenText(content.slice(411));
  }, []);
  const handleClick = () => {
    console.log("yup");
    console.log(isHidden);

    setHidden((val) => !val);
  };

  return (
    <Container color={color.vibrant}>
      <div>
        <i>By: {author} </i>
      </div>
      <ContentContainer>
        {exposedText}
        <AnimatePresence>
          {!isHidden && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              exit={{ height: 0 }}
              transition={{ duration: 0 }}
            >
              {" " + hiddenText}
            </motion.span>
          )}
        </AnimatePresence>
        {hiddenText && (
          <span onClick={handleClick}>
            {isHidden ? (
              <TextContainer color={color.darkVibrant}>
                {" "}
                ...Show more
              </TextContainer>
            ) : (
              <TextContainer color={color.darkVibrant}> Collapse</TextContainer>
            )}
          </span>
        )}
      </ContentContainer>
      <div></div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  color: state.displayMovie.colors,
});
export default connect(mapStateToProps)(ReviewsCarousel);
