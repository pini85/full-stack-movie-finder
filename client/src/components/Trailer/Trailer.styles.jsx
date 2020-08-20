import styled from "styled-components";
export const TrailerContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background: ${(props) =>
    `url(https://image.tmdb.org/t/p/w185//${
      props.poster ? props.poster : null
    })`};

  background-size: 100% 100%;
  background-repeat: cover;
  background-attachment: inherit;
  height: 25rem;
  width: 17rem;
  bottom: 305px;
  right: 188px;
  z-index: 1;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
  @media screen and (max-width: 1000px) {
    top: 260px;
    right: 16px;
  }
`;
export const TrailerPlay = styled.div`
  cursor: pointer;
  position: relative;
  height: 35%;
  width: 50%;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;

  &:hover:after {
    color: ${(props) => props.color};
  }
  &:after {
    content: "\\0025BA";
    position: absolute;
    font-size: 4rem;
    color: ${(props) => props.vibrant};
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
`;

export const YouTubeContainer = styled.div`
  /* transform: scale(0.5); */
`;
