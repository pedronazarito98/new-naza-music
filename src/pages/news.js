import React from "react";
import "../css/news.scss";
import "../css/secondaryCard.scss";
import Img from "../components/Artistas/images/murilo2.png";

function News(props) {
  const {
    tituloModal,
    linkSpotify,
    linkFacebook,
    linkYoutube,
    conteudoModal1,
    conteudoModal2,
    conteudoModal3,
    children,
  } = props;
  return (
    <>
      <section className="conteudoo">
        <div className="mostra-conteudo">
          <h1 className="titulo-post">{tituloModal}</h1>
          <div className="share">
            <div className="box facebook-share">
              <a href={linkFacebook} className="link-botao" target="blank">
                <span className="icone-botao direita">
                  <i class="fab fa-facebook-f"></i>
                </span>
                <span className="caixa-botao">Facebook</span>
              </a>
            </div>
            <div className="box youtube-share">
              <a href={linkYoutube} className="link-botao" target="blank">
                <span className="icone-botao direita">
                  <i class="fab fa-youtube"></i>
                </span>
                <span className="caixa-botao">Youtube</span>
              </a>
            </div>
            <div className="box spotify-share">
              <a href={linkSpotify} className="link-botao" target="blank">
                <span className="icone-botao direita">
                  <i class="fab fa-spotify"></i>
                </span>
                <span className="caixa-botao">Spotify</span>
              </a>
            </div>
          </div>
          <div className="texto-conteudo">
            <h1>{conteudoModal1} </h1>
            <p>{conteudoModal2} </p>
            <p>{conteudoModal3} </p>
            <p>{children}</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default News;
