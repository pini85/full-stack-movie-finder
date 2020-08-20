import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";
import { fetchCastSuggestion } from "../../redux/actions/index";
import CastSuggestion from "../CastSuggestion/CastSuggestion.component";
import CastOptions from "../CastOptions/CastOptions.component";
import Input from "../Input/Input.component";
import Button from "../Button/Button";
import { Container, CastSuggestionsContainer } from "./Cast.styles";

const Cast = ({
  type,
  placeholder,
  fetchCastSuggestion,
  castSuggestions,
  advancedSearchValue,
  advancedSearchSetValue,
  setCastArray,
  setCastOption,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [activateInput, setActivateInput] = useState(false);
  const inputRef = useRef(null);

  useDidUpdateEffect(() => {
    setTimeout(() => {
      fetchCastSuggestion(type, advancedSearchValue);
    }, 150);
  }, [advancedSearchValue]);

  const handleOnChange = (e) => {
    advancedSearchSetValue(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = (e) => {
    setTimeout(() => {
      setFocused(false);
    }, 100);
  };

  const handleSubmit = async () => {
    setCastArray((value) => [...value, advancedSearchValue]);
    advancedSearchSetValue("");
  };

  return (
    <Container>
      {!activateInput && (
        <CastOptions
          name={placeholder}
          setActivateInput={setActivateInput}
          setCastOption={setCastOption}
          inputRef={inputRef}
        />
      )}
      <AnimatePresence>
        {activateInput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Input
              inputRef={inputRef}
              focus={handleFocus}
              blur={handleBlur}
              handleOnChange={handleOnChange}
              value={advancedSearchValue}
              placeholder={placeholder}
            ></Input>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        handleClick={handleSubmit}
        padding="0.5rem 1rem"
        title="&#43;"
      ></Button>
      <CastSuggestionsContainer>
        {isFocused &&
          advancedSearchValue.length > 0 &&
          castSuggestions &&
          castSuggestions.slice(0, 6).map((cast) => {
            return (
              <div key={cast.id}>
                {
                  <CastSuggestion
                    name={cast.name}
                    advancedSearchValue={advancedSearchValue}
                    advancedSearchSetValue={advancedSearchSetValue}
                    focus={handleFocus}
                  />
                }
              </div>
            );
          })}
      </CastSuggestionsContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  castSuggestions: state.castSuggestions,
});

export default connect(mapStateToProps, {
  fetchCastSuggestion: fetchCastSuggestion,
})(Cast);
