import styled from "styled-components";

export const Container = styled.div`
  color: var(--text-white);
  width: fit-content;
  font-size: 2.5rem;
  cursor: pointer;
  margin: 2rem 2rem;
`;

export const OptionTitle = styled.div`
  margin: 1rem 0;
`;

export const OptionContainer = styled.div`
  min-width: 17rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;

  margin-left: 1rem;
  color: ${(props) =>
    props.active == true ? "var(--primary-color)" : "var(--white-text)"};
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s;
  border: ${(props) =>
    props.active == true
      ? "2px solid var(--primary-color)"
      : "2px solid transparent"};
  &:hover {
    color: var(--primary-color);
  }
  &:last-child {
    margin-bottom: 2.5rem;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
  font-size: 3rem;
  color: var(--primary-color);
  margin: 0 2rem;
  transition: all 0.5s;
  &:hover {
    transform: rotate(180deg) scale(1.3);
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 5rem;
  margin-left: 2rem;
`;
