import React from "react";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import "../components/Artistas/Banner/banner.css";
import NagoImg from "../components/Artistas/images/nago-banner.png";
import NagoCard from "../components/Artistas/images/nago-card.JPG";
import CardNago from "../components/Artistas/Cards/CardNago";

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
  alignItems: "center",
};
const image = NagoImg;
const imageC = NagoCard;
const SectionNago = () => {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={imageC}
              alt="Marcio Nagô"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Marcio Nagô </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Compositor </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/marcio.nagooficial/"
                target="blank"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/2QtmA3VCYhHFlsi9cwUggk"
                target="blank"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/nagomarcio/"
                target="blank"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCxzxv-sjKNAvr4cnnN1z_yA"
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
      <div className="releaseArtista">
        <h1 style={{ marginBottom: "2%" }}> Marcio Nagô </h1>
        <p style={{ color: "#000", fontSize: "20px", width: "100%" }}>
          Márcio Roberto Ferreira Lima é natural de Brumadinho (MG), onde, ainda
          garoto, tomou gosto pela música, primeiramente os sons dos tambores.
          Além de treinar capoeira, Márcio Nagô (que significa ‘caminho’ em
          Yorubá) conheceu a tradição e o cotidiano dos quilombos, uma forte
          presença na sua formação musical. Estreou no disco em 2007, com “Raiz
          do Meu Samba”, produção independente. Em 2014 foi a vez do CD “A
          Caminho do Mar”, uma reflexão musical sobre nossos antepassados,
          raízes e heranças. “Flor de Laranjeira”, seu terceiro trabalho,
          lançado em todas plataformas digitais, marca o ponto de maturidade de
          Márcio Nagô como compositor e intérprete e também como autor completo
          de uma obra, já que participou ativamente de todo o processo de
          produção do CD, da concepção das músicas às gravações.
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
        <CardNago />
      </div>
    </div>
  );
};
export default SectionNago;
