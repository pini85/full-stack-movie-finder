import styled from "styled-components";
import Slider from "react-slick";
export const TrailerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => (props.width < 800 ? "scale(0.5)" : null)};
`;
export const CarouselStyling = styled(Slider)`

  /* & .slick-slider.slick-initialized {
    padding: 0 4rem;
    @media screen and (max-width: 700px) {
      padding: 0;
    }
  } */
  & .slick-list {
    /* overflow:visible; */
  }
  & .slick-arrow {
    font-size: 2rem;
  }
  & .slick-arrow.slick-prev {
    position: absolute;
    top: 50%;
    left:5px;
    z-index: 99;
    @media screen and (min-width:800px){
     /* left:-18px; */
    }
  }
  & .slick-arrow.slick-next {
    position: absolute;
    top: 50%;
    /* next should be 10px more than prev */
    right:15px;
    z-index: 99;
    /* @media screen and (max-width: 1300px){
      right:0;
    } */
  }
  & .slick-next::before,
  & .slick-prev::before {
    font-size: 3rem;

    color: ${(props) => props.color};
    /* @media screen and (max-width: 700px) {
      font-size: 4rem;
    } */
  }

  & .slick-dots {
   z
  }
  & .slick-dots li.slick-active button:before {
    opacity: 0.8;
    color: ${(props) => props.activeDotColor};
  }
  & .slick-dots li button:before {
    opacity: 0.5;
    color: white;
  }
  /* .slick-slide {
    margin: 0 1px;
  }
  /* the parent */
  .slick-list {
    margin: 0 -1px;
  } */
`;
