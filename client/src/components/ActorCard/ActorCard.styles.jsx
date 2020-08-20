import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  bottom: 1rem;
  right: 1rem;
  background: #222;
  transition: 0.5s;
  z-index: 1;
`;
export const Title = styled.div`
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  color: transparent;

  transition: all 0.2s 0.2s;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 30rem;
  height: 35rem;
  background: #fff;
  margin: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #fff;
    transition: 0.5s;
    z-index: -1;
  }
  &:hover ${ImageContainer} {
    bottom: 4rem;
  }
  &:hover ${Title} {
    z-index: 2;
    color: var(--text-dark);
  }
  &:hover::before {
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    z-index: 0;
  }
  &:hover::after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    z-index: 0;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailContainer = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 30px;
  text-align: center;
`;
