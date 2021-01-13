import React from "react";

const TitleServices = {
  backgroundColor: "rgb(194, 192, 192)",
  overflow: "hidden",
  paddingTop: "2.3%",
  textAlign: "center",
  height: "7rem",
  width: "100vw",
  marginTop: 10,
};
const ContainerServices = {
  // backgroundColor: "red",
  justifyContent: "center",
};

const ContainerIcones = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 50,
  margin: 20,
};

const StyleIcones = {
  fontSize: 90,
  color: "black",
  marginBottom: 15,
};

const StyleLink = {
  margin: 20,

  color: "rgb(190,6,6)",
};

const SectionServicos = () => {
  return (
    <>
      <div style={{ overflow: "hidden", textAlign: "center" }}>
        <nav className="ContainerListaImagens">
          <div style={TitleServices}>
            <h1
              style={{
                fontSize: "2.5rem",
                letterSpacing: "0.4rem",
                color: "rgb(190,6,6)",
                lineHeight: "1.333",
                margin: "0px auto",
                textTransform: "uppercase",
              }}
            >
              Nossos Serviços
            </h1>
            <hr className="linhaText" />
          </div>
          <div style={ContainerServices}>
            <div style={ContainerIcones}>
              <a href="#/servicos" style={StyleLink}>
                <i style={StyleIcones} class="fas fa-compact-disc"></i>
                <h2>Produção Fonográfica</h2>
                <p>Get played, get paid - worldwide.</p>
              </a>
              <a href="#/servicos" style={StyleLink}>
                <i style={StyleIcones} class="fas fa-music"></i>
                <h2>Edição de Música</h2>
                <p>Get played, get paid - worldwide.</p>
              </a>
            </div>
            <div style={ContainerIcones}>
              <a href="#/servicos" style={StyleLink}>
                <i style={StyleIcones} class="fas fa-bullhorn"></i>
                <h2>Marketing</h2>
                <p>Get played, get paid - worldwide.</p>
              </a>
              <a href="#/servicos" style={StyleLink}>
                <i style={StyleIcones} class="fas fa-volume-up"></i>
                <h2>Licenciamento</h2>
                <p>Get played, get paid - worldwide.</p>
              </a>
            </div>
            <div style={ContainerIcones}>
              <a href="#/servicos" style={StyleLink}>
                <i style={StyleIcones} class="fas fa-guitar"></i>
                <h2>Shows</h2>
                <p>Get played, get paid - worldwide.</p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SectionServicos;
