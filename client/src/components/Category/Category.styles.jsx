import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondary-color);
`;

export const OptionContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
