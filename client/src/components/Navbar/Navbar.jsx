import React from "react";
import { connect } from "react-redux";
import Search from "../Search/Search.component";
import NavbarItem from "../NavbarItem/NavbarItem.component";
import Hamburger from "../Hamburger/Hamburger.component";
import LightSwitch from "../LightSwitch/LightSwitch.component";
import Customize from "../Customize/Customize.component";
import SavedMovies from "../savedMovies/SavedMovies.component";
import Logo from "../Logo/Logo.component";
import Login from "../Login/Login.component";
import UseWidth from "../../hooks/useWidth.hooks";
import "../../themes/replaceTheme";
import { Container, NavbarItemContainer } from "./Navbar.styles";

const Navbar = (props) => {
  const width = UseWidth().width;
  console.log(width);

  return (
    <Container>
      {width > 1700 ? (
        <>
          <Logo></Logo>

          <NavbarItemContainer>
            <NavbarItem
              link="/movies/latest/page/1"
              title="movies"
            ></NavbarItem>
            <NavbarItem link="/tv/latest/page/1" title="tv shows"></NavbarItem>
            <NavbarItem
              link="/advanced-search/"
              title="Advanced Search"
            ></NavbarItem>
            <NavbarItem
              link="/popular-actors/page/1"
              title="Popular Actors"
            ></NavbarItem>
          </NavbarItemContainer>
          {props.currentUser && (
            <NavbarItem link="/user/savedMovies" title="Saved Movies" />
          )}
          <Login></Login>
          <Customize></Customize>
          <LightSwitch></LightSwitch>
        </>
      ) : (
        <>
          <Hamburger />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            {props.currentUser && (
              <NavbarItem link="/user/savedMovies" title="Saved Movies" />
            )}
            <Login></Login>
            {width > 700 ? <Customize></Customize> : null}
            {width > 700 ? <LightSwitch></LightSwitch> : null}
          </div>
        </>
      )}

      {width > 700 ? <Search /> : null}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.fetchCurrentUser,
});

export default connect(mapStateToProps)(Navbar);
