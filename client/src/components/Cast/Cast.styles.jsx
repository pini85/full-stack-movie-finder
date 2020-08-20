import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const CastSuggestionsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 3.5rem;
  z-index: 999;
`;
