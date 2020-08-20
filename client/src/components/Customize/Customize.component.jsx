import React, { useState } from "react";
import { connect } from "react-redux";
import { displayTheme, displaySpinner } from "../../redux/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  OptionsContainer,
  OptionContainer,
  IconContainer,
  ButtonContainer,
  OptionTitle,
} from "./Customize.styles";
import { motion, AnimatePresence } from "framer-motion";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
import Modal from "../Modal/Modal.component";
import CustomizeOption from "../CustomizeOption/CustomizeOption.component";
import Button from "../Button/Button";

const Customize = ({ displayTheme, theme, displaySpinner, spinner }) => {
  const [isToggled, setToggled] = useState(false);
  const [option, setOption] = useState(null);
  const [isSpinners, setSpinners] = useState(null);
  const [isThemes, setThemes] = useState(null);

  const handleSpinners = (e) => {
    const type = e.target.getAttribute("data-option");
    setOption(type);
    displaySpinner(type);
  };

  return (
    <>
      <IconContainer onClick={() => setToggled(true)}>
        <FontAwesomeIcon icon={faCog} />
      </IconContainer>

      <Modal
        isToggled={isToggled}
        setToggled={setToggled}
        setSpinners={setSpinners}
        setThemes={setThemes}
        setOption={setOption}
      >
        <CategoryTitle title="Customize your experience" />
        <Container>
          <OptionTitle onClick={() => setSpinners((value) => !value)}>
            Spinners
          </OptionTitle>
          <AnimatePresence>
            {isSpinners && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 1 }}
                style={{ overflow: "hidden" }}
              >
                <OptionContainer
                  active={spinner === "dvd"}
                  data-option="dvd"
                  onClick={handleSpinners}
                >
                  Bouncing dvd
                </OptionContainer>
                <OptionContainer
                  active={spinner === "camera"}
                  data-option="camera"
                  onClick={handleSpinners}
                >
                  Camera
                </OptionContainer>
                <OptionContainer
                  active={spinner === "spin"}
                  data-option="spin"
                  onClick={handleSpinners}
                >
                  Spin
                </OptionContainer>
              </motion.div>
            )}
          </AnimatePresence>
          <OptionTitle onClick={() => setThemes((value) => !value)}>
            Themes
          </OptionTitle>
          <AnimatePresence>
            {isThemes && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 1 }}
                style={{ overflow: "hidden" }}
              >
                <OptionContainer
                  active={theme === "default-theme"}
                  onClick={() => displayTheme("default-theme")}
                >
                  Default Theme
                </OptionContainer>
                <OptionContainer
                  active={theme === "dark-theme"}
                  onClick={() => displayTheme("dark-theme")}
                >
                  Dark Theme
                </OptionContainer>
                <OptionContainer
                  active={theme === "beige-theme"}
                  onClick={() => displayTheme("beige-theme")}
                >
                  Beige Theme
                </OptionContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
        <AnimatePresence>
          {option && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              > <CustomizeOption option={option} />
            </motion.div>
          )}
        </AnimatePresence>
        <ButtonContainer onClick={() => setToggled(false)}>
          <Button title="Save"></Button>
        </ButtonContainer>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => ({
  theme: state.displayTheme,
  spinner: state.displaySpinner,
});
export default connect(mapStateToProps, {
  displayTheme: (theme) => displayTheme(theme),
  displaySpinner: (spinner) => displaySpinner(spinner),
})(Customize);
