import React, { useState } from "react";
import { Figure, Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import "../Artistas/cardMusic.css";
import FonseecImg1 from '../Artistas/images/Refem-Fonseec.jpeg'
import FonseecImg2 from '../Artistas/images/JahSei-Fonseec.jpeg';
import FonseecImg3 from '../Artistas/images/modoaviao.jpg';
import FonseecImg4 from '../Artistas/images/batomVermelho.jpg';







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
const CardFonseec = () => {
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
              <Figure.Image src={FonseecImg1}/>
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
                href="https://www.deezer.com/en/artist/72189712"
                title="Deezer"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-deezer"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
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
              <Figure.Image src={FonseecImg2} />
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
                href="https://www.deezer.com/en/artist/72189712"
                title="Deezer"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-deezer"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
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
              <Figure.Image src={FonseecImg3} />
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
                href="https://www.deezer.com/en/artist/72189712"
                title="Deezer"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-deezer"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
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
              <Figure.Image src={FonseecImg4} />
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
                href="https://www.deezer.com/en/artist/72189712"
                title="Deezer"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-deezer"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
                title="Youtube" 
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
            </Figure>
          </div>
        </ReactCardFlip>
      </Container>
    </>
  );
};

export default CardFonseec;
