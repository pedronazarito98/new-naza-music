import React from "react";

function CardNews(props) {
  const { imageNews, tituloNews, subtituloNews, onClick } = props;
  return (
    <>
      <div className="secondary-card">
        <div className="secondary-img">
          <img src={imageNews} alt="" />
        </div>

        <div className="secondary-conteudo">
          <h1>{tituloNews} </h1>
          <h2>{subtituloNews}</h2>
          <button className="botao-news" onClick={onClick}>
            Confira
          </button>
        </div>
      </div>
    </>
  );
}

export default CardNews;
