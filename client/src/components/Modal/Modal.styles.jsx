import styled from "styled-components";
export const MainContainer = styled.div`
  position: absolute;
  /* top: ${(props) => (props.y ? `${props.y}px` : null)}; */
  /* left: -14vw; */
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  background: rgba(0, 0, 0, 0.65);

  transform: perspective(0px) rotateY(0deg);
  padding: 0%, 0%;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: hidden;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 85vh;
  width: 85vw;
  background: rgba(0, 0, 0, 0.95);
  background-color: var(--secondary-color-opacity);
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 95vh;
    transform: scale(0.8);
  }
`;
export const ButtonContainer = styled.div`
  position: absolute;
  right: -61px;
  top: -21px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 5rem;
  height: 6rem;
  width: 6rem;
  background: var(--primary-color);
  background: var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    background: var(--secondary-color);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 6rem;
  border: none;
  background: transparent;
  color: var(--secondary-color);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    color: var(--primary-color);
  }
  /* &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    background: var(--secondary-color);
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  } */
`;
