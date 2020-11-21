import React, { useState } from "react";
import { Figure, Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import MuriloImg1 from '../images/Album-Murilo.jpeg';
import MuriloImg2 from '../images/OMundo-Murilo.jpeg';
import MuriloImg3 from '../images/CadaMundo-Murilo.jpeg';

const StyleFigureFront = {
  width: 171,
  height: 142,
};

const styleIcons = {
  display: "flex",
  justifyContent: " space-between",
  justifyItems: "center",
  alignItems: "center",
  marginLeft: 70,
  padding: 5,
  color: "#fff",
};


const CardMurilo = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            <Figure
              onClick={handleClick}
              style={StyleFigureFront}
              className="cardFront"
              cardZIndex
            >
              <Figure.Image src={MuriloImg1} />
            </Figure>
          </div>
          <div>
            <Figure onClick={handleClick} className="cardBack">
              <a
                style={styleIcons}
                href="https://open.spotify.com/album/1wMpHRZPUYSOnZdNzY28wp"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCOZcBp-ZjnQDo1tX5NGLwvw/featured"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.deezer.com/en/artist/80911222"
                title="Deezer"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-deezer"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://music.apple.com/br/artist/george-arrunateghi/912494498"
                title="Apple Music"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-apple"></i>{" "}
              </a>
            </Figure>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            <Figure
              onClick={handleClick}
              style={StyleFigureFront}
              className="cardFront"
              cardZIndex
            >
              <Figure.Image src={MuriloImg2} />
            </Figure>
          </div>
          <div>
            <Figure onClick={handleClick} className="cardBack">
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7?si=6-EtNhSsR02yXvOFubSVBw"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7?si=6-EtNhSsR02yXvOFubSVBw"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.deezer.com/en/artist/80911222"
                title="Deezer"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-deezer"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://music.apple.com/br/artist/george-arrunateghi/912494498"
                title="Apple Music"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-apple"></i>{" "}
              </a>
            </Figure>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            <Figure
              onClick={handleClick}
              style={StyleFigureFront}
              className="cardFront"
              cardZIndex
            >
              <Figure.Image src={MuriloImg3} />
            </Figure>
          </div>
          <div>
            <Figure onClick={handleClick} className="cardBack">
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7?si=6-EtNhSsR02yXvOFubSVBw"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7?si=6-EtNhSsR02yXvOFubSVBw"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.deezer.com/en/artist/80911222"
                title="Deezer"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-deezer"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://music.apple.com/br/artist/george-arrunateghi/912494498"
                title="Apple Music"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-apple"></i>{" "}
              </a>
            </Figure>
          </div>
        </ReactCardFlip>

      </Container>
    </>
  );
};

export default CardMurilo;
