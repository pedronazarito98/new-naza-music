import React from "react";
import "../components/Artistas/Banner/banner.css";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";

import StephanieBanner from "../assets/StephanieJacovine_cut.png";
import StephanieCard from "../assets/StephanieJacovine-capa.png";

import "../components/Artistas/cardMusic.css"
import { CardStephanie } from "../components/Artistas/Cards/CardStephanie";

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

export function PageStephanie() {
  return (
    <div style={styles}>
      <Parallax bgImage={StephanieBanner} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={StephanieCard}
              alt="Stephanie Jacovine"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Stephanie Jacovine </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Compositora </p>

            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/stephaniejacovineoficial"
                target="blank"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/7Ao4EHWl06ttSZrJyuWA7E"
                target="blank"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/people/Stephanie-Jacovine/100083590841146/"
                target="blank"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCe5wzO3oDRRLCJtUbKtvTcQ"
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
        <h1 style={{ marginBottom: "2%" }}> Stephanie Jacovine </h1>
        <p>
          Intérprete expressiva em vários gêneros contemporâneos, como o rock e
          o pop – nacional e internacional –, o sertanejo e a balada romântica,
          Stephanie Jacovine tem na nova MPB sua identificação maior. E é neste
          universo que ela pretende seguir e entregar ao público canções
          autênticas, sejam elas de compositores consagrados, pouco conhecidos
          ou iniciantes, o que é o seu caso: Stephanie lançou nas plataformas
          musicais a sua composição Coração de Melão.
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
        <CardStephanie />
      </div>
    </div>
  );
}
