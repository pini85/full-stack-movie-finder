import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 6rem;
  cursor: pointer;
  /* background: red; */
`;
export const HandleBars = styled.span`
  position: relative;
  height: 4px;
  width: 5rem;
  display: inline-block;
  background-color: ${(props) =>
    props.isOpen ? "transparent" : "var(--primary-color)"};
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--primary-color);
    left: 0;
    top: ${(props) => (props.isOpen ? "0" : "1.5rem")};
    transform: ${(props) => (props.isOpen ? "rotate(135deg)" : null)};
    transition: all 0.2s;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--primary-color);
    left: 0;
    top: ${(props) => (props.isOpen ? "0" : "-1.5rem")};
    transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : null)};
    transition: all 0.2s;
  }
`;
export const Navigation = styled.div`
  position: absolute;
  top: 6rem;
  left: -30px;
  width: 30rem;
  padding: 7rem 3rem;
  background: var(--primary-color);
 
  
  /* transform: ${(props) => (props.isOpen ? "translateX(33rem)" : null)}; */
  transition: all 3s;
  /* transition-timing-function: cubic-bezier(0.17, 0.67, 0.78, 1.74); */
`;
