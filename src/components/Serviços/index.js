import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Image from "material-ui-image";

const Container = {
  margin: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // backgroundColor: "red",
};
const ContainerTexto = {
  marginTop: "50px",
  width: "100%",
};
const Title = {
  fontSize: "24px",
  textAlign: "center",
};
const Texto = {
  padding: 25,
  fontSize: "24px",
  width: "100%",
  textAlign: "center",
};
const StyleImagem = {
  height: 300,
  margin: 20,
  maxWidth: "650px" /* Máximo da largura da imagem */,
  width: " 100%",
  maxHeight: "500px" /* Máximo da altura da imagem */,
  minHeight: "auto",
};

const StylePaper = {
  display: "flex",
  justifyContent: "space-between",
  margin: 20,
  flexWrap: "wrap",
  width: "100%",
  minHeight: "350px",
};

const Service = () => {
  return (
    <>
      {/* Imagem a direita */}
      <div style={Container}>
        <Paper elevation={4} style={StylePaper}>
          <Grid container spacing={4}>
            <Grid item style={{ height: "350px" }}>
              <img style={StyleImagem} src="./01img_producao.png" />
            </Grid>
            <Grid style={ContainerTexto} sm>
              <h4 style={Title}> 01/ Produção Musical </h4>
              <p style={Texto}>
                A Naza Music atua em todas as etapas da produção musical, desde
                o registro sonoro até a masterização. No nosso quadro de
                colaboradores e parceiros estão profissionais de alto nível
                técnico e artístico, entre arranjadores, produtores, músicos,
                engenheiros e técnicos de som, além de um relacionamento
                dinâmico com estúdios de gravação. Com a Naza, você pode
                realizar todo o processo de gravação, da escolha do estúdio ao
                acabamento final do produto (CD/DVD ou outra mídia digital).
              </p>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* Imagem a esquerda */}
      <div style={Container}>
        <Paper elevation={4} style={StylePaper}>
          <Grid container spacing={4}>
            <Grid style={ContainerTexto} md>
              <h4 style={Title}> 02/ Divulgação </h4>
              <p style={Texto}>
                Para o artista que deseja maior visibilidade, a divulgação nas
                emissoras de rádio é fundamental. Pesquisas apontam que, apesar
                da presença evidente da internet, o rádio é um veículo
                primordial para difusão e veiculação do trabalho musical, por
                sua longa tradição, credibilidade e forma de apresentação. A
                exposição do artista é segura, cativante, favorável e, assim,
                com mais chances de fortalecer sua imagem e viabilizar seu
                produto.
              </p>
            </Grid>
            <Grid item style={{ height: "350px" }}>
              <img style={StyleImagem} src="./07img_radio.png" />
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* Imagem a direita */}
      <div style={Container}>
        <Paper elevation={4} style={StylePaper}>
          <Grid container spacing={4}>
            <Grid item style={{ height: "350px" }}>
              <img style={StyleImagem} src="./05img_shows.png" />
            </Grid>
            <Grid style={ContainerTexto} sm>
              <h4 style={Title}> 03/ Shows </h4>
              <p style={Texto}>
                Oferecemos serviços diversos de entretenimento e marketing que
                vão contribuir para destacá-lo no mercado e alavancar seus
                negócios, como shows, palestras motivacionais e produção de
                feiras e eventos.
              </p>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* Imagem a esquerda */}
      <div style={Container}>
        <Paper elevation={4} style={StylePaper}>
          <Grid container spacing={4}>
            <Grid style={ContainerTexto} md>
              <h4 style={Title}> 04/ Assessoria de Imprensa</h4>
              <p style={Texto}>
                Para assegurar um pleno desenvolvimento de carreira e o seu
                reconhecimento pelo público e pela mídia, inovar e investir na
                divulgação da imagem, da marca e do trabalho são ações
                fundamentais. É aí que entra a assessoria de imprensa, que tem
                papel importante nesse processo, ao elaborar estratégias de
                ações com o objetivo de destacar o cliente na mídia (jornais,
                rádios, revistas e emissoras de televisão) e entre o público,
                através das redes sociais
              </p>
            </Grid>
            <Grid item style={{ height: "350px" }}>
              <img style={StyleImagem} src="./02img_assesoria.png" />
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* Imagem a direita */}
      <div style={Container}>
        <Paper elevation={4} style={StylePaper}>
          <Grid container spacing={4}>
            <Grid item style={{ height: "350px" }}>
              <img style={StyleImagem} src="./01img_producao.png" />
            </Grid>

            <Grid style={ContainerTexto} sm>
              <h4 style={Title}> 05/ Distribuição </h4>
              <p style={Texto}>
                A Naza atua com distribuição de música e produtos audiovisuais
                nos formatos físico e digital. Através deste serviço, seu disco
                e seu DVD chegam às principais lojas especializadas do país e
                sua música é disponibilizada em plataformas digitais que
                alcançam diversos países.
              </p>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* Imagem a esquerda */}
      <div style={Container}>
        <Paper elevation={4} style={StylePaper}>
          <Grid container spacing={4}>
            <Grid style={ContainerTexto} md>
              <h4 style={Title}> 06/ Marketing Digital </h4>
              <p style={Texto}>
                O marketing digital é uma ferramenta fundamental para para a
                divulgação de marcas e produtos. A Naza desenvolve estratégias
                de marketing digital objetivas para a imediata conexão de sua
                música e sua imagem com o público. Os serviços para esta
                plataforma de divulgação são, entre outros, gerenciamento de
                blog, marketing de conteúdo, e-mail marketing, anúncios
                gráficos, marketing de vídeo, anúncios digitais pagos, banners,
                anúncios para celular.
              </p>
            </Grid>
            <Grid item style={{ height: "350px" }}>
              <img style={StyleImagem} src="./02img_assesoria.png" />
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* Imagem a direita */}
      <div style={Container}>
        <Paper elevation={4} style={StylePaper}>
          <Grid container spacing={4}>
            <Grid item style={{ height: "350px" }}>
              <img style={StyleImagem} src="./05img_shows.png" />
            </Grid>
            <Grid style={ContainerTexto} sm>
              <h4 style={Title}> 07/ Desenvolvimento de Artistas </h4>
              <p style={Texto}>
                Somos movidos pela arte e a paixão de seus artistas. Nosso
                propósito é descobrir, desenvolver e empregar as melhores
                estratégias para o artista atingir seu objetivo profissional e
                artístico. Para isso, a empresa conta com equipes de
                profissionais especializados em gestão de carreira, assessoria
                artística, produção musical e de shows, agenciamento,
                representação, marketing, contratação e promoção de eventos.
              </p>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Service;
