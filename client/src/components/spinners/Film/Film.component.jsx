import React from "react";
import {
  Container,
  Camera,
  CameraBody,
  Tape,
  Roll,
  Center,
  CameraBodyStuff,
  CameraBodyK7,
  CameraBodyStuffBat,
  CameraBodyStuffPointerFirst,
  CameraBodyStuffPointer,
  CameraBodyOptic,
  CameraBodyLight,
  LoadingContainer,
} from "./Film.styles";
const Film = () => {
  return (
    <Container>
      <Camera>
        <CameraBody>
          <CameraBodyK7>
            <Tape>
              <Roll></Roll>
              <Roll></Roll>
              <Roll></Roll>
              <Roll></Roll>
              <Center></Center>
            </Tape>
            <Tape>
              <Roll></Roll>
              <Roll></Roll>
              <Roll></Roll>
              <Roll></Roll>
              <Center></Center>
            </Tape>
          </CameraBodyK7>
          <CameraBodyStuff>
            <CameraBodyStuffBat></CameraBodyStuffBat>
            <CameraBodyStuffPointerFirst></CameraBodyStuffPointerFirst>
            <CameraBodyStuffPointer></CameraBodyStuffPointer>
          </CameraBodyStuff>
        </CameraBody>
        <CameraBodyOptic></CameraBodyOptic>
        <CameraBodyLight></CameraBodyLight>
      </Camera>
      <LoadingContainer>
        <h1>Loading ...</h1>
      </LoadingContainer>
    </Container>
  );
};
export default Film;
