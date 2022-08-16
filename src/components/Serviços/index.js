import React from "react";
import "../../css/servicos.css";
const Service = () => {
  return (
    <>
      <div className="container">
        <div className="item">
          <img loading='lazy' src="./01img_producao.png" alt="" />{" "}
        </div>
        <div className="item">
          <h4>Titulo</h4>
          <p>
            A Naza Music atua em todas as etapas da produção musical, desde o
            registro sonoro até a masterização. No nosso quadro de colaboradores
            e parceiros estão profissionais de alto nível técnico e artístico,
            entre arranjadores, produtores, músicos, engenheiros e técnicos de
            som, além de um relacionamento dinâmico com estúdios de gravação.
            Com a Naza, você pode realizar todo o processo de gravação, da
            escolha do estúdio ao acabamento final do produto (CD/DVD ou outra
            mídia digital).
          </p>
        </div>
      </div>
      {/* <div className="container2">
        <div className="item2">
          <h4>Titulo</h4>
          <p>
            A Naza Music atua em todas as etapas da produção musical, desde o
            registro sonoro até a masterização. No nosso quadro de colaboradores
            e parceiros estão profissionais de alto nível técnico e artístico,
            entre arranjadores, produtores, músicos, engenheiros e técnicos de
            som, além de um relacionamento dinâmico com estúdios de gravação.
            Com a Naza, você pode realizar todo o processo de gravação, da
            escolha do estúdio ao acabamento final do produto (CD/DVD ou outra
            mídia digital).
          </p>
        </div>
        <div className="item2">
          <img src="./01img_producao.png" alt="" />{" "}
        </div>
      </div> */}
    </>
  );
};
export default Service;
