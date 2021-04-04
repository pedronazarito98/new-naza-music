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
                href="https://www.instagram.com/lu.toledo.cantora/"
                target="blank"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/6wOaX35jxvwUIKE3A9vWSC"
                target="blank"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/lu.toledo.cantora"
                target="blank"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/user/lutoledooficial"
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
          A cantora e compositora Lu Toledo, possui um estilo peculiar de
          cantar, com voz que expressa delicadeza e lirismo ao mesmo tempo em
          que consegue exprimir como quem realmente acredita no que diz. Lançou
          dois álbuns (Risco e Entre Mundos) e um EP gravado em Cuba.
        </p>
        <p>
          Estudou canto, teoria musical, violão e música popular em diversas
          escolas e em cursos como os de extensão na Faculdade de Música da
          UFMG e a Babaya Escola de Canto.{" "}
        </p>
        <p>
          Lu Toledo está lançando seu terceiro álbum, “Jeitos de Amar”. Nesse
          novo trabalho, Lu propõe cantar o amor e as diferentes maneiras de
          amar em diferentes estilos e gêneros musicais, com canções compostas
          por ela e em parcerias com diferentes compositores mineiros e também
          de fora de Minas.{" "}
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
