import React, { useState } from "react";
import "../../css/styleHeader.scss";

function header() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <div className="hamburguer active"></div>

          <ul className="menu active">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default header;
