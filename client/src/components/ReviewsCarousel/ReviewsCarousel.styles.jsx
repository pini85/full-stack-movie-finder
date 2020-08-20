import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  font-size: var(--paragraph);
  padding: 0 2rem 3rem 3rem;
`;

export const ContentContainer = styled.div`
  padding: 0 5rem;
  word-break: break-word;
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
  }
`;

export const TextContainer = styled.span`
  color: ${(props) => props.color};
  cursor: pointer;
`;
