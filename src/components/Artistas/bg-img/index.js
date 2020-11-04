import React from "react";
import { Image } from "react-bootstrap";
import "./banner.css";

function Banner() {
  return (
    <div className="img-fundo">
      <Image
        src="/fonseec-card3.png"
        alt="Fonseec"
        roundedCircle
        className="img-circle"
      />
      <h1> Fonseec </h1>
      <p> Rapper </p>

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
