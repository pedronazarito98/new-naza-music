import React from "react";

import "../components/Artistas/Banner/banner.css";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import HausenImg from "../assets/hausen-foto.png";
import CardHausen from "../components/Artistas/Cards/CardHausen";

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
const image = HausenImg;

function SectionHausen() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={image}
              alt="Hausen"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Dr Hausen &#38; Mr Guay</h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Compositor </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/drhausenemrguayoficial/"
                target="blank"
                title="Instagram"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/5wssa01tJKQnuhgt3AfSXM"
                target="blank"
                title="Spotify"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/drhausenemrguayoficial/"
                target="blank"
                title="Facebook"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCWT4E1Of-TjgucLPZbe4FJg"
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
        <h1 style={{ marginBottom: "2%" }}> Dr Hausen &#38; Mr Guay </h1>

        <p>
          {" "}
          Com relação ao trabalho Dr. Hausen in concert,, assim se define o
          letrista Hausenclever Katerbroyne Pettersen, natural de Alvorada,
          distrito de Carangola-MG, 63 anos, engenheiro civil, residente em
           Palmas -TO.
        </p>
        <p>
          {" "}
          “DEUS teve compaixão de mim e tornou-me compositor (250 letras),
          escritor e poeta; fui influenciado pelo samba, mpb, bossa-nova, blues,
          ópera e música clássica - Cartola, Caymmi, Paulinho da Viola, Tom
          Jobim, BB King, Caruso, Tchaykovsky, Chopin, Louis Armstrong -, entre
          outras estrelas do show business internacional. Neste primeiro
          trabalho, tive a parceria de profissionais tocantinenses, nomeados na
          contracapa do CD. É um ensaio experimental, eclético, sugerindo
          caminhos, voos rasantes que refletem as minhas percepções do mundo e a
          minha reação e elas. Quem sabe, este trabalho possa contribuir para
          uma nova abordagem da música popular brasileira”.
        </p>
        <hr />

        <p>
          Também nascido em Alvorada, 62 anos, Guay é compositor, cantor e
          instrumentista. Começou a carreira profissional aos 17 anos, em
          Governador Valadares.  Integrante do Grupo Temucorda, formado no final
          dos anos 70, gravou seu primeiro vinil – Sangria – pela gravadora
          Copacabana. Também com o Grupo Temucorda gravou o segundo vinil – Voo
          livre de um pensamento (gravadora Phoenix). Com a dissolução da banda,
          em parceria com o irmão, também músico, Velho Rosa (Housemberg
          Pettersen,) gravou seu terceiro trabalho independente: Velho Rosa e
          Guay. Sua parceria mais recente é com outro irmão, Hausenclever, que
          deu origem ao CD  Dr. Hausen in concert.
        </p>
        <p>
          Eventualmente, apresenta-se em shows e festivais em Belo Horizonte,
          além de Governador Valadares e região.
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
        <CardHausen />
      </div>
    </div>
  );
}

export default SectionHausen;
