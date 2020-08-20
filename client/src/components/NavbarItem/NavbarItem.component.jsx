import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { currentPage } from "../../redux/actions/index";
import { Container } from "./NavbarItem.styles";
const NavbarItem = ({ link, title, setCurrentPage }) => {
  const handleClick = () => {
    setCurrentPage(1);
  };
  return (
    <Container>
      <Link onClick={handleClick} to={link}>
        {title}
      </Link>
    </Container>
  );
};

export default connect(null, {
  setCurrentPage: (page) => currentPage(page),
})(NavbarItem);
