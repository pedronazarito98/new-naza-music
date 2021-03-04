import React from "react";

import "../components/Artistas/Banner/banner.css";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import LuToledoImg from "../assets/LuToledo-foto.png";
import CardLuToledo from "../components/Artistas/Cards/CardLuToledo";

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

const styleIcons = {
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  marginLeft: 15,
  color: "#fff",
};
const styleTitle = {
  color: "#fff",
  marginTop: "20px",
};
const image = LuToledoImg;

function SectionLuToledo() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={image}
              alt="Lu Toledo"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Lu Toledo</h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Compositor </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/brunocupertino.oficial/?hl=pt-br"
                target="blank"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/2RwBpMqLtAGEbdWWPgQ65Y"
                target="blank"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/brunocupertino.oficial/"
                target="blank"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCloHOFnyYRQfbb8BLgz0LPg"
                target="blank"
                title="Youtube"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
            </ul>
          </div>
        </div>
      </Parallax>
      <div className="releaseArtista ">
        <h1 style={{ marginBottom: "2%" }}> Lu Toledo </h1>
        <p>
          O sambista mineiro Bruno Cupertino se destaca por uma escrita
          inteligente, rimas modernas, melodias diversificadas e o forte elo com
          a cultura afro-brasileira. Partidário incondicional do samba
          tradicional, Bruno Cupertino apresenta em “Canto Forte” 12 composições
          bem ajustadas ao nome do disco: um conjunto de melodias elaboradas,
          letras consistentes e instrumentação requintada que privilegiam a
          sonoridade natural das vozes, cordas, percussões, flautas e sopros. As
          faixas já estão disponibilizadas nas principais plataformas de música
          digital.
        </p>
      </div>
      <div
        style={{ width: "auto", height: "350px", backgroundColor: "#dcdcdc" }}
      >
        <h1
          style={{
            margin: "0 auto 2% auto",
            width: "200px",
            paddingTop: "2rem",
            paddingBottom: "0.5%",
            borderBottom: "2px solid #d20020 ",
          }}
        >
          {" "}
          Discografia{" "}
        </h1>
        <CardLuToledo />
      </div>
    </div>
  );
}

export default SectionLuToledo;
