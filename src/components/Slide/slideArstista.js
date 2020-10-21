import React from "react";
import { Carousel } from "react-bootstrap";

const SlideArtista = () => {
  return (
    <Carousel className="slideDimensao">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./fonseecSlide1.png"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3> </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./fonseecSlide2.png"
          alt="Second Slide"
        />
        <Carousel.Caption>
          <h3> </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./fonseecSlide3.png"
          alt="Third Slide"
        />
        <Carousel.Caption>
          <h3> </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default SlideArtista;
