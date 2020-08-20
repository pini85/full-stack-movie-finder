import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    /* background:red; */
height: ${(props) => (props.dvd ? "auto" : "28rem")};
    width:  ${(props) => (props.dvd ? "auto" : "48rem")};
    top:${(props) => (props.dvd ? "-5rem" : "25rem")};
    left: ${(props) => (props.dvd ? "-25rem" : "15rem")};
  transform: ${(props) => (props.dvd ? "scale(0.5)" : null)};
  /* margin-top: ${(props) => (props.dvd ? "-12vh" : "12vh")}; */
  margin-left: 22rem;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
