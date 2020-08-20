import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  width: 20rem;
  text-align: center;
  /* background: red; */
`;

export const TitleContainer = styled.div`
  color: ${(props) =>
    props.isActive ? `var(--text-dark)` : `var(--text-white)`};
  background: ${(props) => (props.isActive ? `var(--primary-color)` : null)};
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  border: 1px solid var(--primary-color);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
    background: var(--primary-color);
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  font-size: 1.5rem;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  background: white;
`;

export const OptionContainer = styled.div`
  cursor: pointer;
  padding: 0.7rem;
  font-weight: 700;
  /* background: var(--secondary-color); */
  &:hover {
    background: var(--primary-color-light);
  }
`;
