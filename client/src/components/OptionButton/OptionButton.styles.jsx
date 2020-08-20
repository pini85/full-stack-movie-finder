import styled from "styled-components";
export const Container = styled.div`
  box-sizing: border-box;
  width: 15em;
  height: 3em;
  font-size: 20px;
  border-radius: 0.5em;
  margin: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  line-height: 3em;
  font-weight: 700;

  transition: all 0.3s;
  cursor: pointer;
  margin: 2rem;
  /* z-index: 1; */
`;
