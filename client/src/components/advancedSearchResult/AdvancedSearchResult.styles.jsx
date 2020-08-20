import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  width: 50%;
  color: var(--text-white);
  font-size: 2rem;
  text-align: center;
  padding: 0 5rem;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: inline-block;
  position: relative;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    height: 2px;
    width: 95%;
    background: white;
    transform: translate(-50%, -50%);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const ResultContainer = styled.div`
  margin: 1rem 0;
  width: 50%;
`;

export const ResultContainerTop = styled.div`
  display: flex;
`;

export const ResultContainerBottom = styled.div`
  display: flex;
`;

export const Result = styled.div`
  color: var(--primary-color);
`;

export const ResultSpan = styled.div`
  display: inline-block;
  margin-left: 5px;
  color: var(--primary-color);
`;

export const ModalContainer = styled.div`
  background: var(--secondary-color);
  height: 25vh;
  width: 50vw;
  padding: 2rem;
`;

export const ModalTitleContainer = styled.div`
  margin-bottom: 6rem;
`;
