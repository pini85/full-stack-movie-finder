import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: ${(props) => (props.padding ? props.padding : "1rem 2.5rem")};
  width: ${(props) => props.width};
  background-color: var(--primary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-dark);
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s;
  outline: transparent;

  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-3px);
  }
`;
