import React from "react";
import "../../../css/cardServicos.scss";

export default function CardServicos(props) {
  const { imgUrl, title, conteudo } = props;

  return (
    <>
      <div className="CardContainer">
        <div className="card-style">
          <div className="img-card">
            <img src={imgUrl} alt="" />
          </div>
          <div className="text-card">
            <h1>{title} </h1>
            <p>{conteudo}</p>
          </div>
        </div>
      </div>
    </>
  );
}
