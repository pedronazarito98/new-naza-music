import React from "react";
import "../components/Artistas/Banner/banner.css";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import HansImg from "../components/Artistas/images/hans-banner.png";
// import BrunoCard from "../components/Artistas/images/bruno-card.jpg";
import CardHans from "../components/Artistas/Cards/CardHans";

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

const image = HansImg;

function SectionHans() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={image}
              alt="Hans"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Hans Landim </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Compositor </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/hanslandim/"
                target="blank"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/3zgkrryULAfVdpZ9FDamBG"
                target="blank"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/hanslandim/"
                target="blank"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA"
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
        <h1 style={{ marginBottom: "2%" }}> Hans Landim </h1>
        <p>
          "Performático, criativo e experimentador", assim se define o
          compositor e intérprete. O artista natural de Belo Horizonte é reflexo
          de seu carisma. "Não tenho preconceito principalmente no quesito arte,
          nem um pouco careta", conta. Tudo isso está incorporado nas
          musicalidades dos seus trabalhos já lançados:  A Me Confrontar, Roçar
          teu pelo e Cafuné Café. As canções já podem ser ouvidas e assistidas
          nas plataformas digitais e youtube.
        </p>
        <p>
          Buscando ser um artista completo, Landim investiu pesado na música e
          na dança. "Dancei em uma companhia de dança afro na juventude, cantei
          em corais, depois fui pra carreira solo em bares", conta. Nesse
          período ele rascunhou suas músicas próprias. Atualmente além do
          trabalho solo ele se dedica ao grupo Usoul (@usoul), além de puxar um
          bloco de carnaval em BH no A Roda (@arodabloco) e um projeto pop rock
          nacional chamado Marma Duque (@bandamarmaduque). "Gosto dos artistas
          pop, os que são performáticos que dançam, cantam e interpretam de
          maneiras diferentes. Acho o Prince fantástico, Michael Jackson também.
          Mas a Madonna sempre roubava meus olhares. Sou apaixonado pela Amy
          Winehouse. Não canso de ouvir até hoje", confessa o cantor.
        </p>
        <p>
          Com muita energia, o músico está agora focado em sua carreira solo.
          "Esse ano eu decidi literalmente partir pra prática. Com tudo novo:
          nome artístico, músicas, letras, nova identidade visual, tudo que for
          possível para sair do armário" brinca.
        </p>
        <p>
          Hans Landim se considera um ser em constante descobrimento. "Busco
          sempre a cura através das coisas mais limpas. Busco sempre aprender
          com as energias da natureza. Busco tanto por tratamentos limpos que me
          formei a alguns anos atrás como acupunturista, reikiano, sou
          espiritualista e sou grande apaixonado pela mitologia africana
          atualmente que me traz sempre grandes aprendizados", finaliza o
          músico.
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
        <CardHans />
      </div>
    </div>
  );
}

export default SectionHans;