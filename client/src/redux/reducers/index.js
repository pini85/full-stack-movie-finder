import { combineReducers } from "redux";
import { store } from "../configureStore";

const fetchMoviesReducer = (request = null, action) => {
  if (action.type === "FETCH_MOVIES") {
    return action.payload;
  }
  return request;
};
const selectedMovieIdReducer = (selectedMovieId = null, action) => {
  if (action.type === "MOVIE_ID_SELECTED") {
    return action.payload;
  }
  return selectedMovieId;
};
const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") {
    return action.payload;
  }
  return selectedMovie;
};

// const selectedMoviesReducer = (selectedMovies = false, action) => {
//   if (action.type === "MOVIES_SELECTED") {
//
//     return action.payload;
//   }
//   return selectedMovies;
// };

const movieSuggestionsReducer = (movieSuggestions = false, action) => {
  if (action.type === "MOVIE_SUGGESTIONS") {
    return action.payload;
  }
  return movieSuggestions;
};

const searchQueryReducer = (movieQuery = "", action) => {
  if (action.type === "SEARCH_QUERY") {
    return action.payload;
  }
  return movieQuery;
};

const movieSliderReducer = (movieSlider = null, action) => {
  if (action.type === "FETCH_MOVIE_SLIDER") {
    return action.payload;
  }
  return movieSlider;
};

const newestMoviesReducer = (popularToday = null, action) => {
  if (action.type === "FETCH_NEWEST_MOVIES") {
    return action.payload;
  }
  return popularToday;
};
const highestRatedReducer = (highestRated = null, action) => {
  if (action.type === "FETCH_HIGHEST_RATED_MOVIES") {
    return action.payload;
  }
  return highestRated;
};

const isFetchingReducer = (fetching = false, action) => {
  if (action.type === "IS_FETCHING") {
    return action.payload;
  }
  return fetching;
};

const optionActiveReducer = (active = 1, action) => {
  if (action.type === "OPTION_ACTIVE") {
    return action.payload;
  }
  return active;
};

const displayPageReducer = (page = 1, action) => {
  if (action.type === "DISPLAY_PAGE") {
    return action.payload;
  }
  return page;
};

const displayMovieReducer = (movie = null, action) => {
  if (action.type === "DISPLAY_MOVIE") {
    return action.payload;
  }
  return movie;
};
const fetchTrailersReducer = (trailers = null, action) => {
  if (action.type === "FETCH_TRAILERS") {
    return action.payload;
  }
  return trailers;
};

const fetchTorrentsReducer = (torrents = null, action) => {
  if (action.type === "FETCH_TORRENTS") {
    return action.payload;
  }
  return torrents;
};
const fetchSubtitlesReducer = (subtitle = null, action) => {
  if (action.type === "FETCH_SUBTITLES") {
    return action.payload;
  }
  return subtitle;
};

const fetchMagnetsReducer = (magnets = null, action) => {
  if (action.type === "FETCH_MAGNETS") {
    return action.payload;
  }
  return magnets;
};

const fetchGenresReducer = (genres = null, action) => {
  if (action.type === "FETCH_GENRES") {
    return action.payload;
  }
  return genres;
};

const createAdvancedSearchReducer = (createAdvancedSearch = null, action) => {
  if (action.type === "CREATE_ADVANCED_SEARCH") {
    return action.payload;
  }
  return createAdvancedSearch;
};

const fetchAdvancedSearchReducer = (advancedSearch = null, action) => {
  if (action.type === "FETCH_ADVANCED_MOVIES") {
    return action.payload;
  }
  return advancedSearch;
};

const fetchCastSuggestionsReducer = (suggestions = null, action) => {
  if (action.type === "FETCH_CAST_SUGGESTIONS") {
    return action.payload;
  }
  return suggestions;
};

const userAdvancedSearchesReducer = (savedSearches = [], action) => {
  switch (action.type) {
    case "SAVE_ADVANCED_SEARCH":
      return [...savedSearches, action.payload];
    case "DEFAULT_ADVANCED_SEARCH":
      return [...savedSearches, ...action.payload];
    case "REMOVE_ADVANCED_SEARCH":
      return [...savedSearches].filter((search) => {
        return search !== action.payload;
      });
    default:
      return savedSearches;
  }
};

const displayUserSavedSearchReducer = (displaySearch = null, action) => {
  if (action.type === "DISPLAY_SAVED_SEARCH") {
    return action.payload;
  }
  return displaySearch;
};

const fetchActorMoviesReducer = (movies = null, action) => {
  if (action.type === "FETCH_ACTOR_MOVIES") {
    return action.payload;
  }
  return movies;
};
const fetchPopularActorsReducer = (actors = null, action) => {
  if (action.type === "FETCH_POPULAR_ACTORS") {
    return action.payload;
  }
  return actors;
};
const createPopularActorsReducer = (actors = null, action) => {
  if (action.type === "CREATE_POPULAR_ACTORS") {
    return action.payload;
  }
  return actors;
};

const displayThemeReducer = (theme = "default-theme", action) => {
  if (action.type === "DISPLAY_THEME") {
    return action.payload;
  }
  return theme;
};
const displaySpinnerReducer = (spinner = "dvd", action) => {
  if (action.type === "DISPLAY_SPINNER") {
    return action.payload;
  }
  return spinner;
};

const isSecretSequenceReducer = (bool = false, action) => {
  if (action.type === "SECRET_SEQUENCE") {
    return action.payload;
  }
  return bool;
};

const showSearchResultsReducer = (type = null, action) => {
  if (action.type === "SHOW_SEARCH_RESULTS") {
    return action.payload;
  }
  return type;
};
const currentPageReducer = (page = 1, action) => {
  if (action.type === "CURRENT_PAGE") {
    return action.payload;
  }
  return page;
};

export default combineReducers({
  fetchMovies: fetchMoviesReducer,
  selectedMovie: selectedMovieReducer,
  movieSuggestions: movieSuggestionsReducer,
  search: searchQueryReducer,
  selectedMovieId: selectedMovieIdReducer,
  movieSlider: movieSliderReducer,
  newestMovies: newestMoviesReducer,
  highestRatedMovies: highestRatedReducer,
  optionActive: optionActiveReducer,
  displayPage: displayPageReducer,
  displayMovie: displayMovieReducer,
  trailers: fetchTrailersReducer,
  fetchTorrents: fetchTorrentsReducer,
  fetchSubtitles: fetchSubtitlesReducer,
  fetchMagnets: fetchMagnetsReducer,
  genres: fetchGenresReducer,
  advancedSearch: createAdvancedSearchReducer,
  fetchAdvancedSearch: fetchAdvancedSearchReducer,
  castSuggestions: fetchCastSuggestionsReducer,
  userAdvancedSearches: userAdvancedSearchesReducer,
  displayUserAdvancedSearch: displayUserSavedSearchReducer,
  fetchActorMovies: fetchActorMoviesReducer,
  fetchPopularActors: fetchPopularActorsReducer,
  createPopularActors: createPopularActorsReducer,
  isFetching: isFetchingReducer,
  displayTheme: displayThemeReducer,
  displaySpinner: displaySpinnerReducer,
  isSecretSequence: isSecretSequenceReducer,
  showSearchResults: showSearchResultsReducer,
  currentPage: currentPageReducer,
});
