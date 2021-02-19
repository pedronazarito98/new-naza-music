import React from "react";
import "../css/news.scss";
import Img from "../components/Artistas/images/murilo2.png";
function News() {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#eee",
          margin: "0px auto",
          marginBottom: 200,
        }}
      >
        <div className="ModalContainer">
          <span className="header-data">01/01/2021</span>

          <div className="conteudo-container">
            <h1>
              DE: BMG acquires Mick Fleetwood recorded catalogue interests
            </h1>
            <div className="img-modal">
              <img src={Img} alt="" />
            </div>
            <div className="text-modal">
              <p>
                A Naza Music atua em todas as etapas da produção musical, desde
                o registro sonoro até a masterização. No nosso quadro de
                colaboradores e parceiros estão profissionais de alto nível
                técnico e artístico, entre arranjadores, produtores, músicos,
              </p>
              <p>
                A Naza Music atua em todas as etapas da produção musical, desde
                o registro sonoro até a masterização. No nosso quadro de
                colaboradores e parceiros estão profissionais de alto nível
                técnico e artístico, entre arranjadores, produtores, músicos,
              </p>
              <p>
                A Naza Music atua em todas as etapas da produção musical, desde
                o registro sonoro até a masterização. No nosso quadro de
                colaboradores e parceiros estão profissionais de alto nível
                técnico e artístico, entre arranjadores, produtores, músicos,
              </p>
            </div>
          </div>

          <div className="social-container">
            <p>Compartilhe</p>
            <div className="social-icon">
              <div className="ball-icon">f</div>
              <span className="name-icon"> Facebook</span>
              <div className="ball-icon">f</div>
              <span className="name-icon"> Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default News;
