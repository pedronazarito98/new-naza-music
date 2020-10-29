import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


const Service = () => {
  return (
    <React.Fragment>
      <div className="sectionServices">
        <Container fluid={true}>
          <Row id="producao">
            <Col  className="list-image-Left">
              <Image src="./01img_producao.png" fluid />
            </Col>
            <Col  className="list-text-Left">
              <h4> 01/ </h4>
              <h4> Produção Musical</h4>
              <article>
                A Naza Music atua em todas as etapas da produção musical, desde
                o registro sonoro até a masterização. No nosso quadro de
                colaboradores e parceiros estão profissionais de alto nível
                técnico e artístico, entre arranjadores, produtores, músicos,
                engenheiros e técnicos de som, além de um relacionamento
                dinâmico com estúdios de gravação. Com a Naza, você pode
                realizar todo o processo de gravação, da escolha do estúdio ao
                acabamento final do produto (CD/DVD ou outra mídia digital).
              </article>
            </Col>
          </Row>
          <Row id="divulgacao">
            <Col className="list-text-Right">
              <h4> 02/ </h4>
              <h4> Divulgação </h4>
              <article>
                Para o artista que deseja maior visibilidade, a divulgação nas
                emissoras de rádio é fundamental. Pesquisas apontam que, apesar
                da presença evidente da internet, o rádio é um veículo
                primordial para difusão e veiculação do trabalho musical, por
                sua longa tradição, credibilidade e forma de apresentação. A
                exposição do artista é segura, cativante, favorável e, assim,
                com mais chances de fortalecer sua imagem e viabilizar seu
                produto.
              </article>
            </Col>
            <Col xs= {6} md={5} className="list-image-Right">
              <Image src="./07img_radio.png" fluid />
            </Col>
          </Row>
          <Row id="shows">
            <Col xs= {6} md={5} className="list-image-Left">
              <Image src="./05img_shows.png" fluid />
            </Col>
            <Col className="list-text-Left">
              <h4> 03/ </h4>
              <h4> Shows </h4>
              <article>
                Oferecemos serviços diversos de entretenimento e marketing que
                vão contribuir para destacá-lo no mercado e alavancar seus
                negócios, como shows, palestras motivacionais e produção de
                feiras e eventos.
              </article>
            </Col>
          </Row>
          <Row id="assessoria">
            <Col  className="list-text-Right">
              <h4> 04/ </h4>
              <h4> Assessoria de Imprensa </h4>
              <article>
                Para assegurar um pleno desenvolvimento de carreira e o seu
                reconhecimento pelo público e pela mídia, inovar e investir na
                divulgação da imagem, da marca e do trabalho são ações
                fundamentais. É aí que entra a assessoria de imprensa, que tem
                papel importante nesse processo, ao elaborar estratégias de
                ações com o objetivo de destacar o cliente na mídia (jornais,
                rádios, revistas e emissoras de televisão) e entre o público,
                através das redes sociais
              </article>
            </Col>
            <Col xs= {6} md={5} className="list-image-Right">
              <Image src="./02img_assesoria.png" fluid/>
            </Col>
          </Row>
          <Row id="distribuicao">
            <Col xs= {6} md={5} className="list-image-Left">
              <Image src="./05img_shows.png" fluid />
            </Col>
            <Col className="list-text-Left">
              <h4> 05/ </h4>
              <h4> Distribuição </h4>
              <article>
                A Naza atua com distribuição de música e produtos audiovisuais
                nos formatos físico e digital. Através deste serviço, seu disco
                e seu DVD chegam às principais lojas especializadas do país e
                sua música é disponibilizada em plataformas digitais que
                alcançam diversos países.
              </article>
            </Col>
          </Row>
          <Row id="marketing">
            <Col className="list-text-Right">
              <h4> 06/ </h4>
              <h4> Marketing Digital </h4>
              <article>
                O marketing digital é uma ferramenta fundamental para para a
                divulgação de marcas e produtos. A Naza desenvolve estratégias
                de marketing digital objetivas para a imediata conexão de sua
                música e sua imagem com o público. Os serviços para esta
                plataforma de divulgação são, entre outros, gerenciamento de
                blog, marketing de conteúdo, e-mail marketing, anúncios
                gráficos, marketing de vídeo, anúncios digitais pagos, banners,
                anúncios para celular, analíticos e (???)
              </article>
            </Col>
            <Col xs= {6} md={5} className="list-image-Right">
              <Image src="./02img_assesoria.png" fluid />
            </Col>
          </Row>
          <Row id="agenciamento">
            <Col xs= {6} md={5} className="list-image-Left">
              <Image src="./05img_shows.png" fluid/>
            </Col>
            <Col className="list-text-Left">
              <h4> 07/ </h4>
              <h4> Desenvolvimento de Artistas </h4>
              <article>
                Somos movidos pela arte e a paixão de seus artistas. Nosso
                propósito é descobrir, desenvolver e empregar as melhores
                estratégias para o artista atingir seu objetivo profissional e
                artístico. Para isso, a empresa conta com equipes de
                profissionais especializados em gestão de carreira, assessoria
                artística, produção musical e de shows, agenciamento,
                representação, marketing, contratação e promoção de eventos.
              </article>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Service;
