import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0 auto;

  color: ${(props) => props.fontColor};
  font-weight: 700;
  border-radius: 10px;
  padding: 5px;
  height: 33rem;
  width: min-content;
  /* max-width: 80%; */
  /* margin: 0 1rem; */
  margin-bottom: 4rem;
  text-align: left;
  font-size: 16px;
  background: ${(props) => props.color};
  /* background: transparent; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s;
  @media screen and (max-width: 1200px) {
    height: 33rem;
  }
  @media screen and (max-width: 1000px) {
    height: 36rem;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  /* border-top-left-radius: 120px;
  border-top-right-radius: 120px; */
`;
const noPhotoStyles = `
height: 14rem;
width:14rem
`;
export const Img = styled.img`
  border-radius: 10px;
  margin: 0 auto;
  height: 21rem;
  /* width: 100%; */
  ${(props) => (!props.profile ? noPhotoStyles : null)}
`;

export const BottomContainer = styled.div`
  padding: 1rem;
`;

export const NameContainer = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const CharacterContainer = styled.div`
  font-weight: 300;
  font-size: 1.4rem;
`;
