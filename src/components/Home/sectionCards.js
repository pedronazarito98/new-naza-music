import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
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
          linkFacebook="https://www.facebook.com/fonseecoficial/"
          linkYoutube="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw"
          linkSpotify="https://open.spotify.com/artist/3cq9SAaQLVWE4Lr9ZeEk3J"
          conteudoModal1="Batida forte e solos de guitarra, “Gasolina”, entrelaça rap com rock "
          conteudoModal2="Nas últimas horas de 2020, Fonseec disponibilizou seu quarto single em todos os aplicativos de música.  Em Gasolina, o cantor, compositor e multi-instrumentista Fonseec cria uma explosiva combinação de rap com rock, numa love song dedicada ao amor carnal, ardente, impulsivo, avassalador e perigoso. A forte carga erótica dos versos de Gasolina vem acompanhada de ornamentos sonoros não menos inflamáveis, com destaque para os acordes de uma guitarra “dropada”. O single conta com a participação do cantor, guitarrista e produtor Thierre, responsável pelo mix final.  "
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Além do single, Fonseec preparou um pacote completo. Seu novo
            single, “Gasolina”, ganhou um registro audiovisual.
            <a href="https://youtu.be/J_rcw6jk8HQ" target="blank">
              Assista Agora
            </a>
            <br />
          </span>
          <br />
          <span>
            <p>
              Se inscreva no cana do YouTube:
              <a
                href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw"
                target="blank"
              >
                Fonseec
              </a>
            </p>
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
          linkFacebook="https://www.facebook.com/hanslandim"
          linkYoutube="https://www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA"
          linkSpotify="https://open.spotify.com/artist/3zgkrryULAfVdpZ9FDamBG"
          conteudoModal1="A música “Di Saquê” nasceu do desejo do cantor e compositor Hans Landim abordar a lembrança dos encontros felizes entre as pessoas de um jeito bem cotidiano. Quem nunca teve um encontro com aquela pessoa especial e nunca conseguiu esquecer?"
          conteudoModal2="Pois é!  “Di Saquê” é um delicioso reggaeton que nos leva para as noites latinas quentes tropicais.  O videoclipe “Di Saquê”, traz essa energia latina com a brasilidade que é própria de Hans Landim, o lançamento do vídeo está previsto para janeiro de 2021.  A gravação aconteceu em Belo Horizonte com a participação de bailarinos e bailarinas.  A música promete ser o hit do verão!"
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Ouça agora no:
            <a
              href="https://open.spotify.com/album/7nFGfq8ABRKwWVPqGH8K0y"
              target="blank"
            >
              Spotify
            </a>
            <br />
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a
              href="https://www.youtube.com/channel/UCmBuLev4dz6NUi1L00hnkiA"
              target="blank"
            >
              Hans Landim
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
          tituloModal="Lançamento: Dr. Hausen &#38; Mr. Guay “Os Homens de Pijamas”"
          linkFacebook="https://www.facebook.com/drhausenemrguayoficial"
          linkYoutube="https://www.youtube.com/channel/UCWT4E1Of-TjgucLPZbe4FJg"
          linkSpotify="https://open.spotify.com/artist/5wssa01tJKQnuhgt3AfSXM"
          conteudoModal1="Em sua segunda incursão pelo universo da música, o letrista e compositor Hausenclever Pettersen (Dr. Hausen) lança um novo álbum – “Os Homens de Pijamas”, título inspirado no livro e filme quase homônimos – O menino do pijama listrado”."
          conteudoModal2="Perpassando sentimentos diversos, o CD, com 15 canções, explora temáticas ecléticas, românticas, intimistas, políticas, resgatando emoções onde quer que elas se encontrem. Os ritmos acompanham: são blues, tango, flamenco, sambas, bossa nova e de inspiração clássica, interpretados por diversos cantores e cantoras tocantinenses. A composição instrumental – “Sinfonia da paz” - fecha o repertório. Os arranjos são de Renato Moreira Mota.
          Natural de Alvorada, distrito de Carangola-MG e residente em Palmas-TO, Dr. Hausen já há algum tempo dedica-se a compor, com influências do samba, mpb, bossa-nova, blues, ópera e música clássica (Cartola- Caymmi - Paulinho da Viola - Tom Jobim - BB King – Caruso - Tchaykovsky – Chopin - Louis Armstrong), entre outras estrelas do show business internacional.
          O álbum também presta homenagem ao irmão e parceiro, Mr. Guay, compositor, cantor e instrumentista, falecido há dois anos, com quem Dr. Hausen fez o primeiro trabalho – Dr. Hausen e Mr. Guay in concert. "
          // conteudoModal3="Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
        >
          <span>
            Ouça agora no:
            <a
              href="https://open.spotify.com/artist/5wssa01tJKQnuhgt3AfSXM"
              target="blank"
            >
              Spotify
            </a>
            <br />
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a
              href="https://www.youtube.com/channel/UCWT4E1Of-TjgucLPZbe4FJg"
              target="blank"
            >
              Dr. Hausen &#38; Mr. Guay
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
          tituloModal="Lançamento: George Arrunáteghi “Tropical Romance”"
          linkFacebook="https://www.facebook.com/Arrunateghi/"
          linkYoutube="https://www.youtube.com/user/MrArrunategui"
          linkSpotify="https://open.spotify.com/artist/0P8n9m0G7CdyPLDtoT0x9b"
          conteudoModal1="O amor, em suas mais distintas formas e nuances, continua sendo a tônica ao trabalho do intérprete e compositor George Arrunáteghi. Essa peculiaridade é, portanto, presença notável em seu mais recente trabalho, Tropical Romance, gravado em Belo Horizonte, Los Angeles, nos EUA, e São Petersburgo, na Rússia.
          ."
          conteudoModal2="Se, em Let’s Fall in Love, seu primeiro CD, George se encarregou de interpretar alguns clássicos da canção americana (“Night and Day”), francesa (“Les Feuilles Mortes”) e da MPB (“Até Pensei” e “Eu te Amo” de Chico Buarque), entre outros, Tropical Romance apresenta maior afinidade com a produção contemporânea, embora inclua em seu repertório dois hits atemporais.
          <br/>
          Seguindo a receita do título, o repertório privilegia músicas de grande densidade emocional e de balanço sofisticado, incluindo de um lado “Je Suis Malade”, de Serge Lama, e “SelfPity”, da holandesa Margriet Eshuijs, e, de outro, as vibrantes e “calientes” “Being Cool (Avião)”, de Djavan, e “Moonglow”."
          conteudoModal3="O processo de produção do álbum ilustra bem a inquietude, as fontes de inspiração e o modo de trabalho de George Arrunáteghi, um artista sempre receptivo às ideias e sugestões de seus colaboradores. Este trabalho seria na linha romântica clássica de “Moonglow” (de De Lange-Mills-Hudson), mas os arranjos criados acabaram por dar uma outra direção ao trabalho. O resultado acabou ficando com sabor tropical, uma mescla de luar, brisa e calor."
        >
          <span>
            Ouça agora no:
            <a href="https://backl.ink/143639918" target="blank">
              Spotify
            </a>
            <br />
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="https://www.youtube.com/user/MrArrunategui">
              George Arrunáteghi
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
          tituloModal="Lançamento: Murilo Santiago “Cada Um é Um Mundo”"
          linkFacebook="https://www.facebook.com/murilosantiagocompositor/"
          linkYoutube="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7"
          linkSpotify="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7"
          conteudoModal1="Murilo Santiago dedica-se à composição musical há 15 anos,
          neste CD, Murilo Santiago estreou como cantor e também em parcerias, com Toninho Ferragutti, Cléber Alves, Gustavo Figueiredo e Thiago Nunnes."
          conteudoModal2="Nascido na década de 1950, suas influências musicais retratam o cenário multifacetado da época, até a atualidade, tempo em que ouviu a passagem do samba-canção para a bossa-nova, os movimentos pós-bossa-nova, entre eles a tropicália, até a MPB atual e as canções francesas, o jazz norte-americano, o rock e a evolução até o pop, no exterior e no Brasil.

          As suas composições trilham pelos ritmos e gêneros da chamada MPB e assim também os temas de suas letras, embora também adentre nas baladas blues ou jazzísticas e outras praias, como que experimentando limites."
          conteudoModal3="Lançou seu primeiro trabalho autoral em 2005, Tempo Pra Canção, com participações de intérpretes renomados, como Ladston do Nascimento,  Lucinha Lins, o Grupo Nós e Voz, Wolf Borges, Henrique Santana, Titi Walter e instrumentistas reconhecidos como Omar Fontes, Gilson Peranzetta, Cid Ornelas, Deivid Santos e outros. A produção musical foi de Wolf Borges e Omar Fontes. "
        >
          <p>
            {" "}
            <b>
              O segundo volume de Cada Um é o Mundo está em fase de produção
            </b>
            .{" "}
          </p>
          <span>
            Ouça agora no:
            <a href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7">
              Spotify
            </a>
            <br />
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="https://open.spotify.com/artist/6XHF5j783jbEMT3sM2q9Y7">
              Murilo Santiago
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
          tituloModal="Lançamento: Lu Toledo “Jeitos de Amar”"
          linkFacebook="https://www.facebook.com/lu.toledo.cantora/"
          linkYoutube="https://www.youtube.com/user/lutoledooficial"
          linkSpotify="https://open.spotify.com/artist/6wOaX35jxvwUIKE3A9vWSC"
          conteudoModal1="A cantora e compositora mineira Lu Toledo, está lançando o álbum “Jeitos de Amar”, trazendo 9 músicas inéditas e uma nova versão para “Coisas de Casal” de Rita Lee e Roberto de Carvalho. Neste álbum a artista reverencia o amor em suas mais diversas expressões e apresenta canções inspiradas em suas poesias e visões, abarcando um universo bastante feminino e intimista. "
          conteudoModal2="Em “Jeitos de Amar”, Lu Toledo propõe cantar o amor e as diferentes maneiras de amar em diferentes estilos e gêneros musicais, com canções compostas por ela e em parcerias com diferentes compositores mineiros e também de fora de Minas."
          conteudoModal3=" É um trabalho diferente, poético e melódico. Daqueles que dão vontade de parar tudo para ouvir e absorver o conteúdo das letras. Mais que isso, Lu Toledo traz uma proposta musical em que, inusitados arranjos surpreendem sem seguir uma linha reta. Suas composições são um convite aos ouvintes a passear pelos diferentes mundos musicais que a cantora traz de suas vivências.
          “E se no fim ofereço, um novo começo é em outro lugar... e se me sinto sozinho, há sempre um caminho, um sol a brilhar”... Esse é um trecho da canção, “Recomeço”.
           “Tempo de Amar” chega com um registro audiovisual, já disponível no canal YouTube da artista."
        >
          <span>
            Ouça agora no:
            <a
              href="https://www.youtube.com/watch?v=Vq5qK5HXmSg&list=OLAK5uy_kckn7el6lu3phIVxTD4xaw4rSR2T_fNoQ"
              target="blank"
            >
              YouTube
            </a>
            <br />
          </span>

          <span>
            Inscreva-se no canal do YouTube:
            <a href="https://www.youtube.com/user/lutoledooficial">Lu Toledo</a>
          </span>
        </Modals>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-cardNews">
        <CardNews
          imageNews={ImageHans}
          tituloNews="Di Saquê"
          subtituloNews="Hans Landim está com música nova nas plataformas digitais – “Di Saquê”"
          onClick={handleOpen2}
        />

        <CardNews
          imageNews={ImageHausen}
          tituloNews="Os Homens de Pijamas"
          subtituloNews="Lançamento: Dr. Hausen &#38; Mr. Guay "
          onClick={handleOpen3}
        />

        <CardNews
          imageNews={ImageGeorge}
          tituloNews="Tropical Romance"
          subtituloNews="O amor em suas várias encarnações"
          onClick={handleOpen4}
        />

        <CardNews
          imageNews={ImageMurilo}
          tituloNews="Cada Um é o Mundo"
          subtituloNews="A versatilidade em ritmos e temas."
          onClick={handleOpen5}
        />

        <CardNews
          imageNews={ImageLuToledo}
          tituloNews="Jeitos de Amar"
          subtituloNews="Novo álbum de Lu Toledo, chega às plataformas digitais."
          onClick={handleOpen6}
        />
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
