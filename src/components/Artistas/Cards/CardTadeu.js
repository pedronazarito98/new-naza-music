import React, { useState } from "react";
import { Figure } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import TadeuImg1 from "../images/NomeAmor-Tadeu.jpeg";
import TadeuImg2 from "../images/PopRoca-Tadeu.jpeg";

const StyleFigure = {
  width: 171,
  height: 171,
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
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            <Figure
              onClick={handleClick}
              style={StyleFigure}
              className="cardFront"
              cardZIndex
            >
              <Figure.Image src={TadeuImg1} />
            </Figure>
          </div>
          <div>
            <Figure
              style={StyleFigure}
              onClick={handleClick}
              className="cardBack"
            >
              <ul style={{ width: "30%", marginTop: 20 }}>
                <a
                  style={styleIcons}
                  href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                  title="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                  title="Deezer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-deezer"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://music.apple.com/br/artist/george-arrunateghi/912494498"
                  title="Apple Music"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-apple"></i>{" "}
                </a>
              </ul>
            </Figure>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            <Figure
              onClick={handleClick}
              style={StyleFigure}
              className="cardFront"
              cardZIndex
            >
              <Figure.Image src={TadeuImg2} />
            </Figure>
          </div>
          <div>
            <Figure
              style={StyleFigure}
              onClick={handleClick}
              className="cardBack"
            >
              <ul style={{ width: "30%", marginTop: 20 }}>
                <a
                  style={styleIcons}
                  href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                  title="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                  title="Deezer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-deezer"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://music.apple.com/br/artist/george-arrunateghi/912494498"
                  title="Apple Music"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-apple"></i>{" "}
                </a>
              </ul>
            </Figure>
          </div>
        </ReactCardFlip>
      </div>
    </>
  );
};

export default CardTadeu;
