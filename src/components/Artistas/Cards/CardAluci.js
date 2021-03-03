import React, { useState } from "react";
import { Figure } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import AlucinImg from "../images/alucinoise-card.png";

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

const CardAluci = () => {
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
              <Figure.Image src={AlucinImg} style={{ height: 171 }} />
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
                  href="https://open.spotify.com/artist/2kjVzhiCpW6gp5QmbI3m6Y"
                  title="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/channel/UCWV4891FXmv9axy465juX7g"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.deezer.com/en/artist/105790632"
                  title="Deezer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-deezer"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://music.apple.com/br/artist/alucinoise/1530102094"
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

export default CardAluci;
