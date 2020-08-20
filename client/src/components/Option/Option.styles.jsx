import styled from "styled-components";

export const Container = styled.div`
  color: var(--text-white);
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  text-align: center;
  /* background: transparent; */

  border: 1px solid var(--primary-color);
  margin: 0 1.5rem;
  transition: all 0.3s;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    width: 33rem;
    margin: 1rem 0;
  }
  &:hover {
    color: var(--text-dark);
    background: var(--primary-color) !important;
  }
`;
