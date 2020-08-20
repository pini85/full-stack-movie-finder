import styled from "styled-components";
export const Wrapper = styled.div`
  color: ${(props) => props.textColor};

  & > :nth-child(odd) {
    background: ${(props) =>
      `linear-gradient(to right, ${props.color2}, ${props.color1})`};
    text-align: left;
    padding-left: 10%;
    transform: perspective(500px) rotateY(45deg);
    z-index: 1;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 0.5em;
      z-index: -1;
      transition: opacity 0.3s;
      opacity: 0;
      background: ${(props) =>
        `linear-gradient(to right, ${props.color1}, ${props.color2})`};
    }
    &:hover::before {
      opacity: 1;
    }
    &:hover {
      transform: perspective(200px) rotateY(45deg);
      padding-left: 5%;
    }
  }

  & > :nth-child(even) {
    background: ${(props) =>
      `linear-gradient(to left, ${props.color2}, ${props.color1})`};
    text-align: right;
    padding-right: 10%;
    transform: perspective(500px) rotateY(-45deg);
    z-index: 1;
    &:before {
      background: ${(props) =>
        `linear-gradient(to right, ${props.color1}, ${props.color2})`};
    }
    &:hover {
      transform: perspective(200px) rotateY(-45deg);
      padding-right: 5%;
    }
  }
`;
