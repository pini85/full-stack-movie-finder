import React from "react";
import {
  Container,
  CustomizeContainer,
  SearchContainer,
  Options,
  Option,
} from "./Navigation.styles";
import Customize from "../Customize/Customize.component";
import Search from "../Search/Search.component";
import LightSwitch from "../LightSwitch/LightSwitch.component";
import { Link } from "react-router-dom";
import useWidth from "../../hooks/useWidth.hooks";
const Navigation = ({ setOpen }) => {
  const width = useWidth().width;
  const handleClick = () => {
    setOpen((val) => !val);
  };

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      {width < 500 ? (
        <>
          <CustomizeContainer>
            <LightSwitch></LightSwitch>
            <Customize></Customize>
          </CustomizeContainer>
          <SearchContainer>
            <Search setOpen={setOpen}></Search>
          </SearchContainer>
        </>
      ) : null}
      <Options>
        <Link onClick={handleClick} to="/">
          <Option>Home</Option>
        </Link>
        <Link onClick={handleClick} to="/movies/latest/page/1">
          <Option>Movies</Option>
        </Link>

        <Link onClick={handleClick} to="/tv/latest/page/1">
          <Option>Tv Shows</Option>
        </Link>

        <Link onClick={handleClick} to="/advanced-search/">
          <Option>Advanced Search</Option>
        </Link>
        <Link onClick={handleClick} to="/popular-actors/page/1">
          <Option>Popular Actors</Option>
        </Link>
      </Options>
    </Container>
  );
};
export default Navigation;
