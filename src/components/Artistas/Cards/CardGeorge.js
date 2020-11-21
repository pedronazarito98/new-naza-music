import React, { useState } from "react";
import { Figure, Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import GeorgeImg1 from '../images/Album-George.jpeg';
import GeorgeImg2 from '../images/TropicalRomance.jpeg';
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

const CardGeorge = () => {
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
              <Figure.Image src={GeorgeImg1} />
            </Figure>
          </div>
          <div>
            <Figure onClick={handleClick} className="cardBack">
            <a
                style={styleIcons}
                href="open.spotify.com/artist/0tiWlOYVWYzczJejHW4JRV"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.deezer.com/br/artist/12250312?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=desktop&utm_content=album-132171152"
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
              <Figure.Image src={GeorgeImg2} />
            </Figure>
          </div>
          <div>
            <Figure onClick={handleClick} className="cardBack">
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.deezer.com/br/artist/12250312?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=desktop&utm_content=album-132171152"
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

export default CardGeorge;
