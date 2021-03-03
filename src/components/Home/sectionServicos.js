import React from "react";
import "../../css/sectionServicos.scss";
import {
  BiMicrophone,
  BiMusic,
  BiStar,
  BiCopyright,
  BiEqualizer,
} from "react-icons/bi";

function SectionServicos() {
  return (
    <>
      <div className="icones-container">
        <div
          style={{
            width: "100%",
            height: "100px",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <h1>Nossos Serviços</h1>
          <hr className="linhaTexto" />
        </div>
        <div className="content-icon">
          <div className="icon-card">
            <div className="icon-container">
              <BiMicrophone className="icon" />
            </div>
            <div className="text-icon">
              <h1 className="title-icon"> Produção Fonográfica </h1>
              <p className="subTitle-icon">Get played, get paid - worldwide</p>
            </div>
          </div>

          <div className="icon-card">
            <div className="icon-container">
              <BiMusic className="icon" />
            </div>
            <div className="text-icon">
              <h1 className="title-icon"> Edição Musical </h1>
              <p className="subTitle-icon">Get played, get paid - worldwide</p>
            </div>
          </div>

          <div className="icon-card">
            <div className="icon-container">
              <BiStar className="icon" />
            </div>
            <div className="text-icon">
              <h1 className="title-icon"> Marketing </h1>
              <p className="subTitle-icon">Get played, get paid - worldwide</p>
            </div>
          </div>
        </div>

        <div className="content-icon2">
          <div className="icon-card">
            <div className="icon-container">
              <BiCopyright className="icon" />
            </div>
            <div className="text-icon">
              <h1 className="title-icon"> Licenciamento </h1>
              <p className="subTitle-icon">Get played, get paid - worldwide</p>
            </div>
          </div>

          <div className="icon-card">
            <div className="icon-container">
              <BiEqualizer className="icon" />
            </div>
            <div className="text-icon">
              <h1 className="title-icon"> Shows </h1>
              <p className="subTitle-icon">Get played, get paid - worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionServicos;
