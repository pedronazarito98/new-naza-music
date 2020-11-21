import React, { useState } from "react";
import { Figure, Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import TadeuImg1 from '../images/NomeAmor-Tadeu.jpeg';
import TadeuImg2 from '../images/PopRoca-Tadeu.jpeg';


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

const CardTadeu = () => {
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
              <Figure.Image src={TadeuImg1} />
            </Figure>
          </div>
          <div>
            <Figure onClick={handleClick} className="cardBack">
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
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
              <Figure.Image src={TadeuImg2} />
            </Figure>
          </div>
          <div>
            <Figure onClick={handleClick} className="cardBack">
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
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

export default CardTadeu;
