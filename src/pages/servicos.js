import React from "react";
import Card1 from "../components/Serviços/Cards/CardServicos1";
import Card2 from "../components/Serviços/Cards/CardServicos2";
import Image4 from  '../assets/divulga.png'
import Image2 from  '../assets/assessoria.png'
import Image3 from  '../assets/marketing.png'
import Image from  '../assets/produM.png'
import Image5 from  '../assets/distribui.png'
import Image6 from  '../assets/desenvolvimento.png'
const Serviços = () => {
  return (
    <>
      <div style={{ margin: "0px auto" }}>
        <Card1
          imgUrl={Image}
          title="01/ Produção Musical"
          conteudo="A Naza Music atua em todas as etapas da produção musical, desde o
            registro sonoro até a masterização. No nosso quadro de colaboradores
            e parceiros estão profissionais de alto nível técnico e artístico,
            entre arranjadores, produtores, músicos, engenheiros e técnicos de
            som, além de um relacionamento dinâmico com estúdios de gravação.
            Com a Naza, você pode realizar todo o processo de gravação, da
            escolha do estúdio ao acabamento final do produto (CD/DVD ou outra
            mídia digital)."
        />
        <Card2
          imgUrl={Image4}
          title="02/ Divulgação"
          conteudo="Para o artista que deseja maior visibilidade, a divulgação nas
          emissoras de rádio é fundamental. Pesquisas apontam que, apesar
          da presença evidente da internet, o rádio é um veículo
          primordial para difusão e veiculação do trabalho musical, por
          sua longa tradição, credibilidade e forma de apresentação. A
          exposição do artista é segura, cativante, favorável e, assim,
          com mais chances de fortalecer sua imagem e viabilizar seu
          produto."
        />
        <Card1
          imgUrl="./05img_shows.png"
          title="03/ Shows"
          conteudo="Oferecemos serviços diversos de entretenimento e marketing que
          vão contribuir para destacá-lo no mercado e alavancar seus
          negócios, como shows, palestras motivacionais e produção de
          feiras e eventos."
        />
        <Card2
          imgUrl={Image2}
          title="04/ Assessoria de Imprensa"
          conteudo="Para assegurar um pleno desenvolvimento de carreira e o seu
          reconhecimento pelo público e pela mídia, inovar e investir na
          divulgação da imagem, da marca e do trabalho são ações
          fundamentais. É aí que entra a assessoria de imprensa, que tem
          papel importante nesse processo, ao elaborar estratégias de
          ações com o objetivo de destacar o cliente na mídia (jornais,
          rádios, revistas e emissoras de televisão) e entre o público,
          através das redes sociais"
        />
        <Card1
          imgUrl={Image5}
          title="05/ Distribuição"
          conteudo="A Naza atua com distribuição de música e produtos audiovisuais
          nos formatos físico e digital. Através deste serviço, seu disco
          e seu DVD chegam às principais lojas especializadas do país e
          sua música é disponibilizada em plataformas digitais que
          alcançam diversos países."
        />
        <Card2
          imgUrl={Image3}
          title="06/ Marketing Digital"
          conteudo="O marketing digital é uma ferramenta fundamental para para a
          divulgação de marcas e produtos. A Naza desenvolve estratégias
          de marketing digital objetivas para a imediata conexão de sua
          música e sua imagem com o público. Os serviços para esta
          plataforma de divulgação são, entre outros, gerenciamento de
          blog, marketing de conteúdo, e-mail marketing, anúncios
          gráficos, marketing de vídeo, anúncios digitais pagos, banners,
          anúncios para celular, analíticos"
        />
        <Card1
          imgUrl={Image6}
          title="07/ Desenvolvimento de Artistas"
          conteudo="Somos movidos pela arte e a paixão de seus artistas. Nosso
          propósito é descobrir, desenvolver e empregar as melhores
          estratégias para o artista atingir seu objetivo profissional e
          artístico. Para isso, a empresa conta com equipes de
          profissionais especializados em gestão de carreira, assessoria
          artística, produção musical e de shows, agenciamento,
          representação, marketing, contratação e promoção de eventos."
        />
      </div>
    </>
  );
};
export default Serviços;
