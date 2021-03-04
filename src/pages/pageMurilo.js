import React from "react";
import "../components/Artistas/Banner/banner.css";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import MuriloImg from "../components/Artistas/images/murilo2.png";
import CardMurilo from "../components/Artistas/Cards/CardMurilo";
import MuriloCard from "../components/Artistas/images/murilo-card.jpg";

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
const image = MuriloImg;
const imageC = MuriloCard;
function Banner() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={imageC}
              alt="Murilo Santiago"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Murilo Santiago </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Compositor </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/murilosantiagocompositor/"
                target="blank"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7?si=6-EtNhSsR02yXvOFubSVBw"
                target="blank"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/murilosantiagocompositor"
                target="blank"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCOZcBp-ZjnQDo1tX5NGLwvw/featured"
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
        <h1 style={{ marginBottom: "2%" }}> Murilo Santiago </h1>
        <p>
          Advogado de profissão, Murilo iniciou-se na carreira musical há pouco
          mais de uma década, escrevendo canções para outros intérpretes,
          revelando-se, muito à vontade no samba, no baião e outros ritmos
          brasileiros, além das várias modalidades da nossa canção popular e do
          jazz. Essa versatilidade está evidenciada nos três discos lançados por
          ele de forma independente: “Tempo pra Canção” (2007), “O Mundo É Cada
          Um” (2014), e “Cada Um É o Mundo” (2018), nos quais comparece como
          intérprete de suas canções.
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
        <CardMurilo />
      </div>
    </div>
  );
}

export default Banner;
