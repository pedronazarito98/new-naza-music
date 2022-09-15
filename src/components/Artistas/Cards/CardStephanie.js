import React, { useState } from "react";
import { Figure } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import StephanieImg from "../../../assets/StephanieJacovine-capa.png";

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

export const CardStephanie = () => {
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
              <Figure.Image src={StephanieImg} style={{ height: 160 }} />
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
                  href="https://open.spotify.com/artist/7Ao4EHWl06ttSZrJyuWA7E"
                  title="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/watch?v=oadMOMd24Vk"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.deezer.com/br/artist/176927837"
                  title="Deezer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i class="fab fa-deezer"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://music.apple.com/br/artist/stephanie-jacovine/1635188804"
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

