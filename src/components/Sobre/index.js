import React from "react";
import { Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import imgSobre from "../Sobre/img-sobre.jpg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const SobreNos = () => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <div style={styles}>
          <Parallax
            bgImage={imgSobre}
            style={{ height: "600px" }}
            blur={{ min: 1, max: 2 }}
          >
            <div className="slider--text">
              <h1>Sobre Naza </h1>
              <hr className="linhaText" />
            </div>
          </Parallax>
        </div>
        <Row>
          <div className="text-Sobre">
            <h2 className="sub-title">
              "A Naza atende a um grupo de talentosos artistas em
              desenvolvimento e estabelecidos, assim como produtoras, selos e
              gravadoras."
            </h2>
            <p>
              A Naza Music Entretenimento é uma empresa musical que oferece
              estrutura completa para atender artistas e compositores de
              diversos segmentos. Criada em 2001, em Belo Horizonte, dentro de
              uma concepção inovadora de mercado artístico e musical, aliamos a
              paixão pelo trabalho à estratégias dinâmicas de divulgação e
              promoção, lançando mão, para isso, das mais variadas inovações
              tecnológicas disponíveis. Combinamos a tradição da arte com a
              atualidade do mercado, uma vez que o sucesso do cliente é o que
              determina a eficiência e a distinção da empresa. Por isso,
              oferecemos serviços exclusivos e diferenciados, já reconhecidos e
              destacados no cenário fonográfico e de shows e eventos.
            </p>
            <p>
              Por isso, oferecemos serviços exclusivos e diferenciados, já
              reconhecidos e destacados no cenário fonográfico e de shows e
              eventos.
            </p>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SobreNos;
