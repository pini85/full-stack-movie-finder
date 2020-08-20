import styled from "styled-components";

export const StyleSelect = styled.select`
  color: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--primary-color);
  font-weight: 300;

  text-align-last: center;
  margin: 0 1rem;

  font-size: 1.5rem;
  background: white;
  @media screen and (max-width: 700px) {
    margin: 1rem 1rem;
  }
`;

export const StyleOptionDisabled = styled.option`
  display: none;
`;
