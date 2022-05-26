import React from "react";
import Card1 from "../components/Serviços/Cards/CardServicos1";
import Card2 from "../components/Serviços/Cards/CardServicos2";
import Image4 from  '../assets/divulga.png'
import Image2 from  '../assets/assessoria.png'
import Image3 from  '../assets/marketing.png'
import Image5 from  '../assets/distribui.png'
import Image6 from  '../assets/desenvolvimento.png'
const Serviços = () => {
  return (
    <>
      <div style={{ margin: "0px auto" }}>
        <Card2
          imgUrl={Image4}
          title="Divulgação"
          conteudo="Para o artista que deseja maior visibilidade, a divulgação nas emissoras de rádio é fundamental. Ao lado da evidente força da internet, o rádio é um veículo primordial para difusão e veiculação do trabalho musical, por sua tradição, credibilidade e forma de apresentação. A exposição do artista é segura, cativante e favorável, aumentando, dessa forma, suas chances de fortalecer sua imagem e viabilizar seu produto."
        />
        <Card1
          imgUrl="./05img_shows.png"
          title="Shows"
          conteudo="Oferecemos serviços diversos de entretenimento e marketing que
          vão contribuir para destacá-lo no mercado e alavancar seus
          negócios, como shows, palestras motivacionais e produção de
          feiras e eventos."
        />
        <Card2
          imgUrl={Image2}
          title="Assessoria de Imprensa"
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
          title="Distribuição"
          conteudo="A Naza atua com distribuição de música e produtos audiovisuais
          nos formatos físico e digital. Através deste serviço, seu disco
          e seu DVD chegam às principais lojas especializadas do país e
          sua música é disponibilizada em plataformas digitais que
          alcançam diversos países."
        />
        <Card2
          imgUrl={Image3}
          title="Marketing Digital"
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
          title="Desenvolvimento de Artistas"
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
