import React from "react";

import "./styleCard.scss";
function CardNew({ image, title, text }) {
  return (
    <>
      <section className="card-container">
        <div className="card-s">
          <div className="card-imag"></div>
          <div className="conteudo">
            <span>01/01/2020</span>

            <h1>News</h1>
            <h2>Conteudo</h2>
          </div>
        </div>
        <div className="card-s">
          <div className="card-imag"></div>
          <div className="conteudo">
            <span>01/01/2020</span>

            <h1>News</h1>
            <h2>Conteudo</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardNew;
