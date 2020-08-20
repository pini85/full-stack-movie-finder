import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 18rem;
  background: var(--secondary-color);
  margin: 0 1rem;
  border-left: 1px solid white;
  border-right: 1px solid white;

  font-size: 1.5rem;
  color: var(--text-white);
  border-bottom: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
    background-color: var(--primary-color-light);
  }
`;
