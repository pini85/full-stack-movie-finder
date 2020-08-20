import styled from "styled-components";

export const StyledInput = styled.input`
  width: 18rem;
  height: 2.5rem;
  padding: 1.5rem;
  margin: 0 1rem;
  font-size: 1.3rem;
  border: 2px solid var(--primary-color);
  @media screen and (max-width: 800px) {
    width: 30vw;
  }
  @media screen and (max-width: 500px) {
    width: 35vw;
  }
`;
