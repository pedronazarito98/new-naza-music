import React from "react";
import { Image } from "react-bootstrap";
import "./banner.css";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};


function Banner() {
  return (
    <div style={styles}>
      <Parallax bgImage={require('./components/Artistas/images/batomVermelho.jpg')} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src="/fonseec-card3.png"
              alt="Fonseec"
              roundedCircle
              className="img-circle"
            />
            <h1> Fonseec </h1>
            <p> Rapper </p>
          </div>
        </div>
      </Parallax>

      <ul className="icones-social-media">
        <a
          className="icone-social"
          href="https://www.instagram.com/fonseecoficial/"
          title="Instagram"
        >
          {" "}
          <i class="fab fa-instagram"></i>
        </a>
        <a
          className="icone-social"
          href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag"
          title="Spotify"
        >
          {" "}
          <i class="fab fa-spotify"></i>{" "}
        </a>
        <a
          className="icone-social"
          href="https://www.facebook.com/fonseecoficial"
          title="Facebook"
        >
          {" "}
          <i class="fab fa-facebook"></i>
        </a>
        <a
          className="icone-social"
          href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
          title="Youtube"
        >
          {" "}
          <i class="fab fa-youtube"></i>{" "}
        </a>
      </ul>
    </div>
  );
}

export default Banner;
