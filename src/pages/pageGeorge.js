import React from "react";
import {
  Figure,
  Dropdown,
  DropdownButton,
  Col,
  Row,
  Carousel,
} from "react-bootstrap";

const SectionGeorge = () => {
  return (
    <React.Fragment>
      <Carousel className="slideDimensao">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./tadeuSlide1.png"
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
            className="d-block w-100"
            src="./tadeuSlide3.png"
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h3> </h3>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="w984 overflowFix ">
        <div className="h40"></div>
        <h1 className="upper">
          <div className="left"> George Arrunateghi </div>
          <a className="icon" href="https://www.instagram.com/george_arrunateghi/" title='Instagram'>
            {" "}
            <img src="./instagram-icon.png" alt="" />{" "}
          </a>
          <a className="icon" href="https://open.spotify.com/album/1eC7A5TwUhRamHB0oQolBA?si=8eru6u2CQwqh47EUhBfLrg" title='Spotify'>
            {" "}
            <img src="./spotify_icon.png" alt="" />{" "}
          </a>
          <a className="icon" href="https://www.facebook.com/george.arrunateghi" title='Facebook'>
            {" "}
            <img src="./FB_icon.png" alt="" />{" "}
          </a>
          <a className="icon" href="https://www.youtube.com/c/GeorgeArrunategui" title='Youtube'>
            {" "}
            <img src="./youtube_icon.png" alt="" />{" "}
          </a>
          <div className="clear"></div>
        </h1>
        <div>
          <Row>
            <Col>
              <Figure>
                <Figure.Image src="/tadeuCard.png" />
                <DropdownButton
                  id="dropdown-basic"
                  variant="inline"
                  title="Ouvir"
                >
                  <Dropdown.Item href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true" title='Spotify'> Spotify </Dropdown.Item>
                  <Dropdown.Item href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw" title='Youtube'> Youtube </Dropdown.Item>
                  <Dropdown.Item href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true" title='Deezer'> Deezer </Dropdown.Item>
                </DropdownButton>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image src="/tadeuCard.png" />
                <DropdownButton
                  id="dropdown-basic"
                  variant="inline"
                  title="Ouvir"
                >
                  <Dropdown.Item href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true" title='Spotify'> Spotify </Dropdown.Item>
                  <Dropdown.Item href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw" title='Youtube'> Youtube </Dropdown.Item>
                  <Dropdown.Item href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true" title='Deezer'> Deezer </Dropdown.Item>
                </DropdownButton>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image src="/tadeuCard2.png" />
                <DropdownButton
                  id="dropdown-basic"
                  variant="inline"
                  title="Ouvir"
                >
                  <Dropdown.Item href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true" title='Spotify'> Spotify </Dropdown.Item>
                  <Dropdown.Item href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw" title='Youtube'> Youtube </Dropdown.Item>
                  <Dropdown.Item href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true" title='Deezer'> Deezer </Dropdown.Item>
                </DropdownButton>
              </Figure>
            </Col>
          </Row>
          <div className="albuma">
            <Figure>
              <Figure.Image src="/tadeuSlide1.png" />
            </Figure>
          </div>
        </div>
        <div className="release">
          <hr />
          <h4> George Arrunateghi </h4>
          <div className="textoregular">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem sIpsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </span>
            <p>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </span>
            </p>
          </div>
          <hr className="linha" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default SectionGeorge;