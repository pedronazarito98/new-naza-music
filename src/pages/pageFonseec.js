import React from "react";
import Banner from "../components/Artistas/Banner/index";
import CardFonseec from "../components/Artistas/cardsMusic";

const Artista = () => {
  return (
    <>
      <div>
         <Banner /> {/*O Component de cima */}
      </div>
     <div className="releaseArtista "> {/*  O texto */}
        <h1 style={{ marginBottom: "2%" }}> Fonseec </h1>
        <p>
        Fonseec deu início à sua carreira no mundo do rap em
        2018, aos 19 anos, quando lançou seu primeiro trabalho
        gravado, “Sofá”, que teve a participação do rapper
        Menezzes. “Sofá” já delineava o estilo de Fonseec: um rap
        mais romântico e sensualizado, contemporâneo e mais
        próximo de suas vivências pessoais e artísticas.
        Um mês depois dessa estreia, Fonseec já mostrava um
        novo trabalho: “Vem Logo”. Em seguida veio o hit
        “Mesma Cama”, em parceria com o NeoBeats, produtor
        também de algumas das músicas do grupo Haikaiss e
        Classe A, entre outros. Esses primeiros trabalhos, se
        mostram influências de R&amp;B e do rapper Luccas Carlos, já
        estabelecem também um estilo pessoal, moldado na
        herança musical de Fonseec e em sua visão de mundo e da
        criação artística.
        </p>
      </div>
      {/* A div onde fica a Discografia */}
      <div
        style={{ width: "auto", height: "350px", backgroundColor: "#dcdcdc" }}
      >
        <h1
          style={{
            margin: "0 auto 2% auto",
            width: "200px",
            paddingTop: "2rem",
            paddingBottom: "0.5%",
            borderBottom: "2px solid #d20020 ",
          }}
        >
          {" "}
          Discografia{" "}
        </h1>
        <CardFonseec /> {/* Os cards de discografia */}
      </div>
    </>
  );
};
export default Artista;
