import React from "react";
import "../css/news.scss";
import "../css/secondaryCard.scss";
import Img from "../components/Artistas/images/murilo2.png";
function News(props) {
  const { tipo, data, titulo, imagem, texto, icones } = props;
  return (
    <>
      <section className="conteudoo">
        <div className="mostra-conteudo">
          <h1 className="titulo-post">
            O ASTRO DADDY YANKEE LANÇA SEU NOVO SINGLE,'PROBLEMA'
          </h1>
          <div className="share">
            <div className="box facebook-share">
              <a href="#" className="link-botao" target="_blank">
                <span className="icone-botao direita">
                  <i class="fab fa-facebook-f"></i>
                </span>
                <span className="caixa-botao">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default News;
