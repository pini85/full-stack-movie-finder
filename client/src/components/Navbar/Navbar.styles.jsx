import styled from "styled-components";
export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 20px;
  background: var(--secondary-color-light);
  height: 7vh;
  padding: 3rem;
  z-index: 5;
  transition: background 0.5s;
`;
export const NavbarItemContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const Img = styled.img`
  height: 6rem;
  width: ${(props) => (props.width < 1000 ? "18rem" : "23rem")};
  margin-top: 1rem;
`;

export const ContainerSmall = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const CustomizeContainer = styled.div``;
