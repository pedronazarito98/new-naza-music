import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

const Slide = () => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                loading="lazy"
                className="d-block w-100"
                src="./tadeuSlide2.png"
                alt="Second Slide"
              />
              <Carousel.Caption>
                <h3> </h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                loading="lazy"
                className="d-block w-100"
                src="./murilo1.png"
                alt="Third Slide"
              />
              <Carousel.Caption>
                <h3> </h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Slide;
