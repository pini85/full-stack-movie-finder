import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Button, ButtonContainer } from "./Modal.styles";

const Modal = ({
  isToggled,
  setToggled,
  setSpinners,
  setThemes,
  setOption,
  skew,
  children,
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
  return (
    <AnimatePresence>
      {isToggled && (
        <Container>
          <motion.div
            initial={{ opacity: 0, width: "75%" }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            duration={1}
          >
            <motion.div initial={{ y: 0 }} animate={{ y: 30 }} exit={{ y: 30 }}>
              <div className="YO">
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
              </div>
              {children}
            </motion.div>
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};
export default Modal;
