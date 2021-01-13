import React from "react";
import { Image } from "react-bootstrap";
import "../components/Artistas/Banner/banner.css";
import { Parallax } from "react-parallax";
import TadeuImg from "../components/Artistas/images/Tadeu-franco.jpg";
import CardTadeu from "../components/Artistas/Cards/CardTadeu";
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
const image = TadeuImg;

function BannerTadeu() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={TadeuImg}
              alt="Tadeu Franco"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Tadeu Franco </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Cantor </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/tadeufrancooficial/"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw"
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
        <h1 style={{ marginBottom: "2%" }}> Tadeu Franco </h1>
        <p>
          O talento de Tadeu Franco ganhou projeção nacional em 1982, quando
          participou do disco “Anima”, de Milton Nascimento, gravando com ele e
          Simone a música "Comunhão" (Milton e Fernando Brant). Em 1984 lançou o
          primeiro disco "Cativante", com produção e direção de Milton
          Nascimento e arranjos de Wagner Tiso e Túlio Mourão, trabalho que
          apresenta um compositor e intérprete de estilo próprio e marcante.
          Tadeu Franco gravou outros quatro discos: Alma Animal (1990),
          “Orlando” (1995), “Em Nome do Amor” (2004) e “Pop Roça” (2008). Tadeu
          volta aos palcos com o show “Comunhão”, o repertório reúne canções
          favoritas, sucessos e inéditas.
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
        <CardTadeu />
      </div>
    </div>
  );
}

export default BannerTadeu;
