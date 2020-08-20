import React from "react";
import Search from "../Search/Search.component";
import NavbarItem from "../NavbarItem/NavbarItem.component";
import Hamburger from "../Hamburger/Hamburger.component";
import LightSwitch from "../LightSwitch/LightSwitch.component";
import Customize from "../Customize/Customize.component";
import Logo from "../Logo/Logo.component";
import UseWidth from "../../hooks/useWidth.hooks";
import "../../themes/replaceTheme";
import { Container, NavbarItemContainer, Img } from "./Navbar.styles";

const Navbar = (props) => {
  const width = UseWidth().width;

  return (
    <Container>
      {width > 1100 ? (
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
            {width > 500 ? <Customize></Customize> : null}
            {width > 500 ? <LightSwitch></LightSwitch> : null}
          </div>
        </>
      )}

      {width > 500 ? <Search /> : null}
    </Container>
  );
};

export default Navbar;
