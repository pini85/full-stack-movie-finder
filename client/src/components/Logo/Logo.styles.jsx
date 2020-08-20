import styled from "styled-components";
export const Img = styled.img`
  height: 6rem;
  width: ${(props) => (props.width < 1000 ? "18rem" : "23rem")};
  margin-top: 1rem;
`;
