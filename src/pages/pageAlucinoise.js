import React from "react";
import "../components/Artistas/Banner/banner.css";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import AlucinImg from "../components/Artistas/images/alucinoise-banner.png";
import CardAlucinoise from "../components/Artistas/Cards/CardAluci";
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
const image = AlucinImg;
const imageC = AlucinImg;

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
const SectionAluci = () => {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={imageC}
              alt="Alucinoise"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Alucinoise </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Rock </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/murilosantiagocompositor/"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7?si=6-EtNhSsR02yXvOFubSVBw"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/murilosantiagocompositor"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCOZcBp-ZjnQDo1tX5NGLwvw/featured"
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
        <h1 style={{ marginBottom: "2%" }}> Alucinoise </h1>
        <p>
          Rock pesado com balanço e personalidade. Esta é a configuração da
          banda Alucinoise, formada por Katy Wolters (vocal/guitarra), Sergio
          Geleia (guitarra), Daniel Panetonni (baixo) e Pedro Canela Joe
          (bateria), e que tem repertório centrado em composições próprias e
          canções de sucesso afinadas à suas concepções musicais. Recentemente
          foi lançado o single “Lay Low” em todas plataformas digitais.
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
        <CardAlucinoise />
      </div>
    </div>
  );
};
export default SectionAluci;
