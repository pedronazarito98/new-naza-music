import React, { useState } from "react";
import { Figure } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import MuriloImg1 from "../images/Album-Murilo.jpeg";
import MuriloImg2 from "../images/OMundo-Murilo.jpeg";
import MuriloImg3 from "../images/CadaMundo-Murilo.jpeg";

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

const CardMurilo = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            <Figure
              onClick={handleClick}
              style={StyleFigure}
              className="cardFront"
              cardZIndex
            >
              <Figure.Image src={MuriloImg1} />
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
                  href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7"
                  title="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/channel/UCOZcBp-ZjnQDo1tX5NGLwvw/featured"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.deezer.com/en/artist/80911222"
                  title="Deezer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-deezer"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://music.apple.com/br/artist/murilo-santiago/1491376782"
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
              <Figure.Image src={MuriloImg2} />
            </Figure>
          </div>
          <div>
            <Figure
              onClick={handleClick}
              className="cardBack"
              style={StyleFigure}
            >
              <ul style={{ width: "30%", marginTop: 20 }}>
                <a
                  style={styleIcons}
                  href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7"
                  title="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/channel/UCOZcBp-ZjnQDo1tX5NGLwvw/featured"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.deezer.com/en/artist/80911222"
                  title="Deezer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-deezer"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://music.apple.com/br/artist/murilo-santiago/1491376782"
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
              <Figure.Image src={MuriloImg3} />
            </Figure>
          </div>
          <div>
            <Figure
              onClick={handleClick}
              className="cardBack"
              style={StyleFigure}
            >
              <ul style={{ width: "30%", marginTop: 20 }}>
                <a
                  style={styleIcons}
                  href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7"
                  title="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/channel/UCOZcBp-ZjnQDo1tX5NGLwvw/featured"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.deezer.com/en/artist/80911222"
                  title="Deezer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-deezer"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://music.apple.com/br/artist/murilo-santiago/1491376782"
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

export default CardMurilo;
