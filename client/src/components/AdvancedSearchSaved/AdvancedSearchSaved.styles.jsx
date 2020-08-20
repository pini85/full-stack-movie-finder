import styled from "styled-components";
export const Container = styled.div`
  margin-top: 5rem;
  text-align: center;
  width: 50%;
  color: var(--text-white);
  font-size: 2rem;
  padding: 0 5rem;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-bottom: 4rem;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  display: inline-block;
  position: relative;
  font-size: 2.5rem;
  margin-bottom: 4rem;
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
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-left: -6rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1) rotate(45deg);
  }
`;
