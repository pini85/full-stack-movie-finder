import React from "react";
import { Container } from "./CustomizeOption.styles";
import { AnimatePresence, motion } from "framer-motion";
import BouncingDvd from "../spinners/BouncingDvd/BouncingDvd.component";
import Film from "../spinners/Film/Film.component";
import Spin from "../spinners/Spin/Spin.component";
const CustomizeOption = ({ option }) => {
  const showOption = () => {
    switch (option) {
      case "dvd":
        return <BouncingDvd></BouncingDvd>;
      case "camera":
        return <Film></Film>;
      case "spin":
        return <Spin></Spin>;
    }
  };
  return (
    <Container dvd={option === "dvd" ? true : false}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {showOption()}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};
export default CustomizeOption;
