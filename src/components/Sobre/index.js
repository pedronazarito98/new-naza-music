import React from "react";
import { Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import imgSobre from "../Sobre/img-sobre.jpg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
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
          />
        </div>
        <Row>
          <div className="text-Sobre">
            <h2 className="sub-title">
              A Naza Music atua no mercado de entretenimento como gravadora,
              produtora de conteúdo e editora musical. Sua gama de serviços
              inclui distribuição digital, divulgação em rádio, TV e internet,
              assessoria de imprensa, marketing artístico e promoção de shows
              para artistas, cantores e instrumentistas, atuando em vários
              segmentos musicais.
            </h2>
            <p>
              A empresa trabalha com o objetivo de acentuar o potencial criativo
              e ampliar o alcance comercial de seus artistas, agindo com
              transparência, agilidade, diplomacia e flexibilidade. Para isso,
              utiliza também suas conexões nos meios de comunicação e com outras
              agências, produtoras e promotoras.
            </p>
            <p>
              Composta por profissionais com vasta experiência no mercado do
              entretenimento, a Naza Music oferece suporte técnico para que o
              artista possa acompanhar a progressão comercial de seu trabalho e
              desenvolve oportunidades de negócios no sentido de ampliar o
              público e fomentar novas realizações.
            </p>
            <p>
              Composta por profissionais com vasta experiência no mercado do
              entretenimento, a Naza Music oferece também suporte técnico para
              que o artista possa acompanhar a progressão de seu trabalho e
              desenvolve oportunidades de negócios no sentido de ampliar o
              público e fomentar novas realizações.
            </p>
            <p>
              Missão: contribuir no desenvolvimento da criatividade do artista e
              na ampliação de sua presença no mercado.
              <br />
              Visão: estabelecer-se como um centro de referência para artistas e
              profissionais do mercado fonográfico e do entretenimento. <br />
              Valores: criatividade, comprometimento, transparência,
              flexibilidade.
            </p>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SobreNos;
