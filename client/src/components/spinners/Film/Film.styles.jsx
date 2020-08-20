import styled, { keyframes } from "styled-components";
const k7roll = keyframes`

    0%   { transform: rotate(0deg); }
    100% {  transform: rotate(360deg); }

`;
const light = keyframes`
    0%   { box-shadow: 100px 0 60px 2px rgba(229,247,247, 0.2); }
  50%   { box-shadow: 115px 0 35px 4px rgba(229,247,247, 0.3); }
  100%   { box-shadow: 110px 0 45px 2px rgba(229,247,247, 0.1); }

`;
export const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Camera = styled.div`
  transform: scale(0.4);
  min-width: 350px;
  width: 350px;
  height: 200px;
  position: relative;
`;
export const CameraBody = styled.div`
  background-color: var(--primary-color);

  height: 100%;
  width: 70%;
  position: absolute;
  left: 0;
  border-radius: 0.9rem;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CameraBodyK7 = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Tape = styled.div`
  border-radius: 50%;
  background-color: #40596b;
  width: 100px;
  height: 100px;
  position: relative;
  animation: ${k7roll} 2.5s linear infinite;
`;
export const Roll = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: absolute;
  &:nth-child(1) {
    left: 7%;
    top: 50%;
    transform: translateY(-50%);
  }
  &:nth-child(2) {
    left: 50%;
    bottom: 7%;
    transform: translateX(-50%);
  }
  &:nth-child(3) {
    left: 50%;
    top: 7%;
    transform: translateX(-50%);
  }
  &:nth-child(4) {
    right: 7%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Center = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: black;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
export const CameraBodyStuff = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CameraBodyStuffBat = styled.div`
  height: 100%;
  width: 40%;
  background-color: #189f8c;
`;
export const CameraBodyStuffPointerFirst = styled.div`
  border-radius: 50%;
  background-color: #ce8645;
  width: 20px;
  height: 20px;

  margin-right: 15px;
  margin-left: auto;
`;
export const CameraBodyStuffPointer = styled.div`
  border-radius: 50%;
  background-color: #ce8645;
  width: 20px;
  height: 20px;

  margin-right: 15px;
`;
export const CameraBodyOptic = styled.div`
  background-color: var(--primary-color);
  border: 1px solid black;
  width: 30%;
  height: 90%;
  top: 5%;
  border-radius: 0 15% 15% 0;
  position: absolute;
  left: 70%;
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 80%);
`;
export const CameraBodyLight = styled.div`
  z-index: -1;
  position: absolute;
  height: 60%;
  width: 30%;
  top: 20%;
  right: 0;
  position: absolute;

  /* box-shadow: 95px 0 15px 10px rgba(purple, 0.2); */
  animation: ${light} linear 0.3s infinite;
`;

export const LoadingContainer = styled.div`
  font-size: 1.5rem;
  color: var(--text-white);
  margin-top: -6rem;
`;
