import React from "react";
import Carousel from "react-material-ui-carousel";
import ImageHolder from "../atoms/sliderImgHolder";

const Slider = props => {
  return (
    <Carousel
      style={{width:props.width||'500px'}}
      autoPlay={true}
      timer={10}
      animation="slide"
      indicators={false}
    >
      {props.image.map((item, index) => {
        return <ImageHolder src={item} props={props} key={index} />;
      })}
    </Carousel>
  );
};

export default Slider;
