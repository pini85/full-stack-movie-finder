import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  font-size: 1.5rem;

  background: var(--secondary-color-light);
  color: var(--text-white);
  width: 4.5rem !important;

  padding: 3px 8px;
  border: 1px solid var(--secondary-color-lightest);
  transition: all 0.3s;
  &:hover {
    background: var(--secondary-color-lightest);
    color: var(--text-dark);
  }
  &:focus {
    outline: 0 !important;
  }
`;
