import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  width: 80%;
  margin-bottom: 3rem;
  border-radius: 8px;
  padding: 2rem;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24rem;
  margin-top: 2rem;
  width: 23rem;
`;

export const Header = styled.div`
  font-size: var(--heading - secondary);
`;

export const Plot = styled.div`
  font-size: var(--paragraph);
`;
