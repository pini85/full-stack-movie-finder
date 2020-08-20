import styled from "styled-components";

export const Container = styled.li`
  list-style-type: none;
  position: relative;
  font-size: 2rem;
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  margin-right: 2.5rem;

  color: var(--text-white);
  text-transform: uppercase;
  transition: all 0.3s;
  &:visited {
    color: var(--text-white);
  }
  &::before {
    content: "";
    position: absolute;
    transform: scale(0);

    bottom: 0;
    height: 3px;
    width: 100%;
    background: var(--primary-color);
    transition: all 0.3s;
  }

  &:hover::before {
    transform: scale(1);
  }
`;
