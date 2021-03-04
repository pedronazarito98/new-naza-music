import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "../../css/styleCard.scss";
import Modals from "../../pages/news";
import ImageFonseec from "../../assets/Gasolina-Final.png";
import ImageHans from "../../assets/hans-card.jpg";
import ImageHausen from "../../assets/Os-homens-de-Pijamas.png";
import ImageGeorge from "../../assets/TropicalRomance.jpeg";
import ImageMurilo from "../../assets/CadaMundo-Murilo.jpeg";
import ImageLuToledo from "../../assets/LuToledo-capa.png";

import CardNews from "./index";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SectionCards = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };
  const handleOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const body1 = (
    <div className="ModalStyle PaperModal">
      <div>
        <Modals
          tituloModal="GASOLINA”, NOVO SINGLE DE FONSEEC, ESTÁ NAS PLATAFORMAS DIGITAIS"
          linkFacebook="https://www.instagram.com/p/CLUpdRjg_K-/"
          linkSpotify="https://www.instagram.com/p/CLUpdRjg_K-/"
          conteudoModal1="Batida forte e solos de guitarra, “Gasolina”, entrelaça rap com rock "
          conteudoModal2="Nas últimas horas de 2020, Fonseec disponibilizou seu quarto single em todos os aplicativos de música.  Em Gasolina, o cantor, compositor e multi-instrumentista Fonseec cria uma explosiva combinação de rap com rock, numa love song dedicada ao amor carnal, ardente, impulsivo, avassalador e perigoso. A forte carga erótica dos versos de Gasolina vem acompanhada de ornamentos sonoros não menos inflamáveis, com destaque para os acordes de uma guitarra “dropada”. O single conta com a participação do cantor, guitarrista e produtor Thierre, responsável pelo mix final.  "
        >
          <span>
            Além do single, Fonseec preparou um pacote completo. Seu novo
            single, “Gasolina”, ganhou um registro audiovisual.
            <a href="https://youtu.be/J_rcw6jk8HQ">Assista Agora</a>
          </span>
          <br />
          <span>
            <a href="https://backl.ink/143621587">
              Confira nas plataformas digitais
            </a>
          </span>
        </Modals>
      </div>
    </div>
  );
  const body2 = (
    <div className="ModalStyle PaperModal">
      <div>
        <Modals
          tituloModal="Hans Landim está com música nova nas plataformas digitais – “Di Saquê”"
          linkFacebook="https://www.instagram.com/p/CLUpdRjg_K-/"
          linkSpotify="https://www.instagram.com/p/CLUpdRjg_K-/"
          conteudoModal1="A música “Di Saquê” nasceu do desejo do cantor e compositor Hans Landim abordar a lembrança dos encontros felizes entre as pessoas de um jeito bem cotidiano. Quem nunca teve um encontro com aquela pessoa especial e nunca conseguiu esquecer?"
          conteudoModal2="Pois é!  “Di Saquê” é um delicioso reggaeton que nos leva para as noites latinas quentes tropicais.  O videoclipe “Di Saquê”, traz essa energia latina com a brasilidade que é própria de Hans Landim, o lançamento do vídeo está previsto para janeiro de 2021.  A gravação aconteceu em Belo Horizonte com a participação de bailarinos e bailarinas.  A música promete ser o hit do verão!"
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Ouça agora:
            <a href="https://backl.ink/143639918">
              https://backl.ink/143639918
            </a>
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA">
              www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA
            </a>
          </span>
        </Modals>
      </div>
    </div>
  );
  const body3 = (
    <div className="ModalStyle PaperModal">
      <div>
        <Modals
          tituloModal="Lançamento: Dr. Hausen & Mr. Guay “Os Homens de Pijamas”"
          linkFacebook="https://www.instagram.com/p/CLUpdRjg_K-/"
          linkSpotify="https://www.instagram.com/p/CLUpdRjg_K-/"
          conteudoModal1="Em sua segunda incursão pelo universo da música, o letrista e compositor Hausenclever Pettersen (Dr. Hausen) lança um novo álbum – “Os Homens de Pijamas”, título inspirado no livro e filme quase homônimos – O menino do pijama listrado”."
          conteudoModal2="Perpassando sentimentos diversos, o CD, com 15 canções, explora temáticas ecléticas, românticas, intimistas, políticas, resgatando emoções onde quer que elas se encontrem. Os ritmos acompanham: são blues, tango, flamenco, sambas, bossa nova e de inspiração clássica, interpretados por diversos cantores e cantoras tocantinenses. A composição instrumental – “Sinfonia da paz” - fecha o repertório. Os arranjos são de Renato Moreira Mota.
          Natural de Alvorada, distrito de Carangola-MG e residente em Palmas-TO, Dr. Hausen já há algum tempo dedica-se a compor, com influências do samba, mpb, bossa-nova, blues, ópera e música clássica (Cartola- Caymmi - Paulinho da Viola - Tom Jobim - BB King – Caruso - Tchaykovsky – Chopin - Louis Armstrong), entre outras estrelas do show business internacional.
          O álbum também presta homenagem ao irmão e parceiro, Mr. Guay, compositor, cantor e instrumentista, falecido há dois anos, com quem Dr. Hausen fez o primeiro trabalho – Dr. Hausen e Mr. Guay in concert. "
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Ouça agora:
            <a href="https://backl.ink/143639918">
              https://backl.ink/143639918
            </a>
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA">
              www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA
            </a>
          </span>
        </Modals>
      </div>
    </div>
  );
  const body4 = (
    <div className="ModalStyle PaperModal">
      <div>
        <Modals
          tituloModal="Lançamento: Dr. Hausen & Mr. Guay “Os Homens de Pijamas”"
          linkFacebook="https://www.instagram.com/p/CLUpdRjg_K-/"
          linkSpotify="https://www.instagram.com/p/CLUpdRjg_K-/"
          conteudoModal1="Em sua segunda incursão pelo universo da música, o letrista e compositor Hausenclever Pettersen (Dr. Hausen) lança um novo álbum – “Os Homens de Pijamas”, título inspirado no livro e filme quase homônimos – O menino do pijama listrado”."
          conteudoModal2="Perpassando sentimentos diversos, o CD, com 15 canções, explora temáticas ecléticas, românticas, intimistas, políticas, resgatando emoções onde quer que elas se encontrem. Os ritmos acompanham: são blues, tango, flamenco, sambas, bossa nova e de inspiração clássica, interpretados por diversos cantores e cantoras tocantinenses. A composição instrumental – “Sinfonia da paz” - fecha o repertório. Os arranjos são de Renato Moreira Mota.
          Natural de Alvorada, distrito de Carangola-MG e residente em Palmas-TO, Dr. Hausen já há algum tempo dedica-se a compor, com influências do samba, mpb, bossa-nova, blues, ópera e música clássica (Cartola- Caymmi - Paulinho da Viola - Tom Jobim - BB King – Caruso - Tchaykovsky – Chopin - Louis Armstrong), entre outras estrelas do show business internacional.
          O álbum também presta homenagem ao irmão e parceiro, Mr. Guay, compositor, cantor e instrumentista, falecido há dois anos, com quem Dr. Hausen fez o primeiro trabalho – Dr. Hausen e Mr. Guay in concert. "
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Ouça agora:
            <a href="https://backl.ink/143639918">
              https://backl.ink/143639918
            </a>
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA">
              www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA
            </a>
          </span>
        </Modals>
      </div>
    </div>
  );
  const body5 = (
    <div className="ModalStyle PaperModal">
      <div>
        <Modals
          tituloModal="Lançamento: Dr. Hausen & Mr. Guay “Os Homens de Pijamas”"
          linkFacebook="https://www.instagram.com/p/CLUpdRjg_K-/"
          linkSpotify="https://www.instagram.com/p/CLUpdRjg_K-/"
          conteudoModal1="Em sua segunda incursão pelo universo da música, o letrista e compositor Hausenclever Pettersen (Dr. Hausen) lança um novo álbum – “Os Homens de Pijamas”, título inspirado no livro e filme quase homônimos – O menino do pijama listrado”."
          conteudoModal2="Perpassando sentimentos diversos, o CD, com 15 canções, explora temáticas ecléticas, românticas, intimistas, políticas, resgatando emoções onde quer que elas se encontrem. Os ritmos acompanham: são blues, tango, flamenco, sambas, bossa nova e de inspiração clássica, interpretados por diversos cantores e cantoras tocantinenses. A composição instrumental – “Sinfonia da paz” - fecha o repertório. Os arranjos são de Renato Moreira Mota.
          Natural de Alvorada, distrito de Carangola-MG e residente em Palmas-TO, Dr. Hausen já há algum tempo dedica-se a compor, com influências do samba, mpb, bossa-nova, blues, ópera e música clássica (Cartola- Caymmi - Paulinho da Viola - Tom Jobim - BB King – Caruso - Tchaykovsky – Chopin - Louis Armstrong), entre outras estrelas do show business internacional.
          O álbum também presta homenagem ao irmão e parceiro, Mr. Guay, compositor, cantor e instrumentista, falecido há dois anos, com quem Dr. Hausen fez o primeiro trabalho – Dr. Hausen e Mr. Guay in concert. "
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Ouça agora:
            <a href="https://backl.ink/143639918">
              https://backl.ink/143639918
            </a>
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA">
              www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA
            </a>
          </span>
        </Modals>
      </div>
    </div>
  );
  const body6 = (
    <div className="ModalStyle PaperModal">
      <div>
        <Modals
          tituloModal="Lançamento: Dr. Hausen & Mr. Guay “Os Homens de Pijamas”"
          linkFacebook="https://www.instagram.com/p/CLUpdRjg_K-/"
          linkSpotify="https://www.instagram.com/p/CLUpdRjg_K-/"
          conteudoModal1="Em sua segunda incursão pelo universo da música, o letrista e compositor Hausenclever Pettersen (Dr. Hausen) lança um novo álbum – “Os Homens de Pijamas”, título inspirado no livro e filme quase homônimos – O menino do pijama listrado”."
          conteudoModal2="Perpassando sentimentos diversos, o CD, com 15 canções, explora temáticas ecléticas, românticas, intimistas, políticas, resgatando emoções onde quer que elas se encontrem. Os ritmos acompanham: são blues, tango, flamenco, sambas, bossa nova e de inspiração clássica, interpretados por diversos cantores e cantoras tocantinenses. A composição instrumental – “Sinfonia da paz” - fecha o repertório. Os arranjos são de Renato Moreira Mota.
          Natural de Alvorada, distrito de Carangola-MG e residente em Palmas-TO, Dr. Hausen já há algum tempo dedica-se a compor, com influências do samba, mpb, bossa-nova, blues, ópera e música clássica (Cartola- Caymmi - Paulinho da Viola - Tom Jobim - BB King – Caruso - Tchaykovsky – Chopin - Louis Armstrong), entre outras estrelas do show business internacional.
          O álbum também presta homenagem ao irmão e parceiro, Mr. Guay, compositor, cantor e instrumentista, falecido há dois anos, com quem Dr. Hausen fez o primeiro trabalho – Dr. Hausen e Mr. Guay in concert. "
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Ouça agora:
            <a href="https://backl.ink/143639918">
              https://backl.ink/143639918
            </a>
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA">
              www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA
            </a>
          </span>
        </Modals>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-cardNews">
        <CardNews
          imageNews={ImageFonseec}
          tituloNews="Gasolina"
          subtituloNews='Batida forte e solos de guitarra, "Gasolina", entrelaça rap com rock.'
          onClick={handleOpen1}
        />

        <CardNews
          imageNews={ImageHans}
          tituloNews="Di Saquê"
          subtituloNews="Hans Landim está com música nova nas plataformas digitais – “Di Saquê”"
          onClick={handleOpen2}
        />

        <CardNews
          imageNews={ImageHausen}
          tituloNews="Os Homens de Pijamas"
          subtituloNews="Lançamento: Dr. Hausen & Mr. Guay "
          onClick={handleOpen3}
        />

        <CardNews
          imageNews={ImageGeorge}
          tituloNews="Di Saquê"
          subtituloNews='Batida forte e solos de guitarra, "Gasolina", entrelaça rap com rock.'
          onClick={handleOpen4}
        />

        <CardNews
          imageNews={ImageMurilo}
          tituloNews="Di Saquê"
          subtituloNews='Batida forte e solos de guitarra, "Gasolina", entrelaça rap com rock.'
          onClick={handleOpen5}
        />

        <CardNews
          imageNews={ImageLuToledo}
          tituloNews="Di Saquê"
          subtituloNews='Batida forte e solos de guitarra, "Gasolina", entrelaça rap com rock.'
          onClick={handleOpen6}
        />
        <Modal
          open={open1}
          onClose={handleClose1}
          arial-labelledby="simple-modal-title"
          arial-describedby="simple-modal-description"
        >
          {body1}
        </Modal>
        <Modal
          open={open2}
          onClose={handleClose2}
          arial-labelledby="simple-modal-title"
          arial-describedby="simple-modal-description"
        >
          {body2}
        </Modal>
        <Modal
          open={open3}
          onClose={handleClose3}
          arial-labelledby="simple-modal-title"
          arial-describedby="simple-modal-description"
        >
          {body3}
        </Modal>
        <Modal
          open={open4}
          onClose={handleClose4}
          arial-labelledby="simple-modal-title"
          arial-describedby="simple-modal-description"
        >
          {body4}
        </Modal>
        <Modal
          open={open5}
          onClose={handleClose5}
          arial-labelledby="simple-modal-title"
          arial-describedby="simple-modal-description"
        >
          {body5}
        </Modal>
        <Modal
          open={open6}
          onClose={handleClose6}
          arial-labelledby="simple-modal-title"
          arial-describedby="simple-modal-description"
        >
          {body6}
        </Modal>
      </div>
    </>
  );
};

export default SectionCards;
