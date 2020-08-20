import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: ${(props) => (props.width > 500 ? "35rem" : null)};
  background: ${(props) =>
    props.type === "actor" ? "var(--secondary-color-light)" : null};
  padding: 1rem;
  font-size: 1.7rem;
  color: var(--text-white);
  border-bottom: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
    background-color: var(--primary-color-light);
  }
`;

export const Img = styled.img`
  height: 7rem;
  width: 5rem;
  margin-right: 1rem;
  align-self: center;
`;

export const IconAndYearContainer = styled.div`
  display: flex;
  align-items: center;
`;
