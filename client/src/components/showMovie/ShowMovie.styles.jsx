import styled from "styled-components";

export const Container = styled.div`
  padding: 0 14vw;
  background-image: ${(props) =>
    `linear-gradient(to bottom, ${props.color1}, ${props.color2})`};
  @media screen and (max-width: 1200px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const HeroContainer = styled.div`
  height: 50vh;
  position: relative;
  /* z-index: 1; */
  transform: skewY(2.5deg) translateY(-30px);
  color: var(--text-white);
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    height: 45vh;
  }

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    background: url(https://image.tmdb.org/t/p/w1280//${(props) => (props.poster ? props.poster : null)});
    background-size: 100% 100%;
    background-repeat: cover;
    background-attachment: inherit;
  }
`;

export const TopContainer = styled.div`
  transform: skewY(-2.5deg);
`;

export const MovieCard = styled.div`
  background: ${(props) => props.color};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media only screen and (max-width: 500px) {
    overflow: hidden;
  }
`;

export const TagLineContainer = styled.div`
  margin-top: -3rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;
  font-style: italic;
  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
    padding-right: 18rem;
    padding-bottom: 3rem;
  }
`;

export const BottomContainer = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  /* flex-wrap: wrap; */
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  align-self: flex-start;
  padding: 4rem 0;
  /* & > :nth-child(odd) {
    background: ${(props) =>
      `linear-gradient(to right, ${props.color2}, ${props.color1})`};
    text-align: left;
    padding-left: 10%;
    transform: perspective(500px) rotateY(45deg);
  }
  & > :nth-child(even) {
    background: ${(props) =>
      `linear-gradient(to left, ${props.color2}, ${props.color1})`};
    text-align: right;
    padding-right: 10%;
    transform: perspective(500px) rotateY(-45deg);
  } */
`;

export const PlotContainer = styled.div`
  width: 80%;
  /* height: 100%; */
  padding: 2rem;
  align-self: flex-start;
  color: ${(props) => props.color};
  font-size: var(--paragraph);
  @media screen and (max-width: 500px) {
    width: auto;
    padding: ${(props) =>
      props.tagline ? "4rem 4rem 0 4rem" : "0rem 25rem 0 4rem"};
  }
`;

export const MovieCastContainer = styled.div`
  margin-top: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  border-radius: 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  background: ${(props) => props.color};
`;

export const LeftSide = styled.div`
  width: 75%;
  @media screen and (max-width: 500px) {
    width: fit-content;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
export const RightSide = styled.div`
  display: flex;
`;

export const DirectorAndWriterContainer = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
`;
export const ModalContainer = styled.div`
  background: white;
  width: 50rem;
`;
