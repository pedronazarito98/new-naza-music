import React from 'react'
import { Carousel, Container, Row} from 'react-bootstrap'

const Slide = () => {
    return(
        <React.Fragment>
            <Container fluid={true}>
                <Row>
                    <Carousel > 
                        <Carousel.Item>
                            <img
                            className='d-block w-100'
                            src='./fonseecSlide1.png'
                            alt='First Slide'
                            />
                            <Carousel.Caption>
                                <h3> </h3>
                                <p> </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className='d-block w-100'
                            src='./tadeuSlide2.png'
                            alt='Second Slide'
                            />
                            <Carousel.Caption>
                                <h3> </h3>
                                <p> </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className='d-block w-100'
                            src='./nagoSlide3.png'
                            alt='Third Slide'
                            />
                            <Carousel.Caption>
                                <h3> </h3>
                                <p> </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className='d-block w-100'
                            src='./murilo1.png'
                            alt='Third Slide'
                            />
                            <Carousel.Caption>
                                <h3> </h3>
                                <p> </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className='d-block w-100'
                            src='./nagoSlide2.png'
                            alt='Third Slide'
                            />
                            <Carousel.Caption>
                                <h3> </h3>
                                <p> </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className='d-block w-100'
                            src='./fonseecSlide2.png'
                            alt='Third Slide'
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
    )
}
export default Slide