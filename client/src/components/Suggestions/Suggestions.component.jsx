import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import { connect } from "react-redux";
import { Container } from "./suggestions.styles";

const Suggestions = (props) => {
  const suggestions = () => {
    if (props.castSuggestions) {
      const array = [];
      const cast = props.castSuggestions.slice(0, 2);

      const movies = props.movieSuggestions.results.slice(0, 4);
      array.push(...cast, ...movies);

      return array;
    }
  };

  return (
    <Container>
      {suggestions() &&
        suggestions().map((suggestion) => {
          return (
            <Suggestion
              key={suggestion.id}
              item={suggestion}
              setSearchQuery={props.setSearchQuery}
            />
          );
        })}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  movieSuggestions: state.movieSuggestions,
  castSuggestions: state.castSuggestions,
});
export default connect(mapStateToProps)(Suggestions);
