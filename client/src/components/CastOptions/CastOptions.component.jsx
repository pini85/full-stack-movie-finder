import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  TitleContainer,
  OptionsContainer,
  OptionContainer,
} from "./CastOptions.styles";
const CastOptions = ({ name, setCastOption, setActivateInput, inputRef }) => {
  const [isToggled, setToggled] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setToggled((prevValue) => !prevValue);
    setActive((prevValue) => !prevValue);
  };
  const handleOptionClick = (e) => {
    setToggled((prevValue) => !prevValue);
    setActive((prevValue) => !prevValue);
    setTimeout(() => {
      setActivateInput(true);
      inputRef.current.focus();
    }, 340);
    setCastOption(e.target.getAttribute("data-tag"));
  };
  return (
    <Container>
      <TitleContainer isActive={isActive}>
        <h4 onClick={handleClick}>Add {name}</h4>
      </TitleContainer>

      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            style={{ overflow: "hidden" }}
          >
            <OptionsContainer>
              <div>Do you want {name} in</div>
              <OptionContainer
                data-tag="or"
                onClick={(e) => handleOptionClick(e)}
              >
                In different movies
              </OptionContainer>
              <div>- OR -</div>
              <OptionContainer
                data-tag="and"
                onClick={(e) => handleOptionClick(e)}
              >
                In the same movie
              </OptionContainer>
            </OptionsContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
export default CastOptions;
