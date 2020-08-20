import React from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home.component";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search.component";
import Movies from "./components/Movies/Movies.component";
import ShowMovie from "./components/showMovie/ShowMovie.component";
import MovieListSearch from "./components/MovieListSearch/MovieListSearch";
import TvShows from "./components/TvShows/TvShows.component";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch.component";
import ActorMovies from "./components/ActorMovies/ActorMovies.component";
import PopularActors from "./components/PopularActors/PopularActors.component";
import Customize from "./components/Customize/Customize.component";
import Film from "./components/spinners/Film/Film.component";
import ScrollIntoView from "./components/ScrollIntoView.component";

const App = ({ theme }) => {
  return (
    <div id="app" className={theme}>
      <Router>
        <ScrollIntoView>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={ShowMovie} />
            <Route path="/movies/:category/page/:page" component={Movies} />
            <Route path="/tv/:category/page/:page" component={TvShows} />
            <Route
              path="/search/:query/page/:page"
              component={MovieListSearch}
            />
            <Route exact path="/advanced-search" component={AdvancedSearch} />
            <Route
              path="/advanced-search/:query/page/:page"
              component={MovieListSearch}
            />
            <Route path="/popular-actors/:query" component={PopularActors} />
            <Route path="/actors/:query/page/:page" component={ActorMovies} />
            <Route exact path="/customize" component={Customize} />
            <Route exact path="/spinner/" component={Film} />
          </Switch>
        </ScrollIntoView>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.displayTheme,
});

export default connect(mapStateToProps)(App);
