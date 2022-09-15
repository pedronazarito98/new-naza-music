import React from "react";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import GeorgeImg from "../pages/img-george.png";
import CardGeorge from "../components/Artistas/Cards/CardGeorge";
import "../components/Artistas/cardMusic.css";

const styleIcons = {
  display: "flex",
  justifyContent: " space-between",
  justifyItems: "center",
  alignItems: "center",
  marginLeft: 15,
  color: "#fff",
};
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

const styleTitle = {
  color: "#fff",
  marginTop: "20px",
};

const image = GeorgeImg;

const SectionGeorge = () => {
  return (
    <>
      <div style={styles}>
        <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <Image
                src="/img-george.png"
                alt="George "
                roundedCircle
                className="img-circle"
              />
              <h1 style={styleTitle}> George Arrunateghi </h1>
              <p style={{ color: "#fff", fontSize: "20px" }}> Cantor </p>
              <ul style={{ display: "flex", justifyContent: "center" }}>
                <a
                  style={styleIcons}
                  href="https://www.instagram.com/george_arrunateghi/"
                  target="blank"
                  title="Instagram"
                >
                  {" "}
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  style={styleIcons}
                  href="https://open.spotify.com/artist/0P8n9m0G7CdyPLDtoT0x9b"
                  target="blank"
                  title="Spotify"
                >
                  {" "}
                  <i class="fab fa-spotify"></i>{" "}
                </a>
                <a
                  style={styleIcons}
                  href="https://www.facebook.com/Arrunateghi/"
                  target="blank"
                  title="Facebook"
                >
                  {" "}
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  style={styleIcons}
                  href="https://www.youtube.com/user/MrArrunategui"
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
      </div>
      <div className="releaseArtista">
        <h1 style={{ marginBottom: "2%" }}> George Arrunateghi </h1>
        <p>
          Dono de uma voz privilegiada de ‘baritenor’, George Arrunáteghi é um
          cantor de pop jazz “cross cultural”, por conta de sua afinidade com
          vários idiomas (italiano, francês, espanhol, português e inglês) e de
          seu trânsito entre gêneros musicais brasileiros, europeus e
          norte-americanos. O artista distingue-se pelo repertório seleto e por
          sua excelência na interpretação, atributos que podem ser apreciados em
          seus dois álbuns Let’s Fall in Love e Tropical Romance, além dos
          singles How You Gonna See me Now, Never Gonna Let You Go, Renascer,
          Porto Solidão, Ave Maria e Falando de Amor.
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
        <CardGeorge />
      </div>
    </>
  );
};

export default SectionGeorge;
