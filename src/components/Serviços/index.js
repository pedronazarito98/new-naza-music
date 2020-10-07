import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
const Service = () => {
    return(
        <React.Fragment>
            <div className='sectionServices'>
                <Container>
                    <Row id='producao' >
                        <Col sm={6} className='list-image-Left' >
                        <img  src='./01img_producao.png' alt=""/>
                        </Col>
                        <Col sm={6} className="list-text-Left">
                            <h4> 01/ </h4>
                            <h4> Produção Musical</h4>
                            <article>
                                A Naza Music atua em todas as etapas da produção musical, 
                                desde o registro sonoro até a masterização. No nosso quadro de colaboradores 
                                e parceiros estão profissionais de alto nível técnico e artístico, entre arranjadores, 
                                produtores, músicos, engenheiros e técnicos de som, além de um relacionamento dinâmico 
                                com estúdios de gravação. Com a Naza, você pode realizar todo o processo de gravação, 
                                da escolha do estúdio ao acabamento final do produto (CD/DVD ou outra mídia digital).
                            </article>
                        </Col>
                    </Row>
                    <Row  id='divulgacao'>
                        <Col sm={6}  className="list-text-Right">
                            <h4> 02/ </h4>
                            <h4> Divulgação  </h4>
                            <article>
                            Para o artista que deseja maior visibilidade, a divulgação nas emissoras de rádio é 
                            fundamental. Pesquisas apontam que, apesar da presença evidente da internet, o rádio é um 
                            veículo primordial para difusão e veiculação do trabalho musical, por sua longa tradição, 
                            credibilidade e forma de apresentação.  A exposição do artista é segura, cativante, favorável e, 
                            assim, com mais chances de fortalecer sua imagem e viabilizar seu produto.
                            </article>
                        
                        </Col>
                        <Col sm={6} className='list-image-Right'>
                        <img src='./07img_radio.png' alt="" />
                        </Col>
                    </Row>
                    <Row id='shows'>
                        <Col sm={6} className='list-image-Left'>
                        <img src='./05img_shows.png' alt="" />
                        </Col>
                        <Col sm={6} className='list-text-Left' >
                            <h4> 03/ </h4>
                            <h4> Shows </h4>
                            <article>
                            Oferecemos serviços diversos de entretenimento e marketing que vão contribuir para 
                            destacá-lo no mercado e alavancar seus negócios, como shows, palestras motivacionais 
                            e produção de feiras e eventos.
                            </article>
                        </Col>
                    </Row>
                    <Row id='assessoria' >
                        <Col sm={6}  className="list-text-Right">
                            <h4> 04/ </h4>
                            <h4> Assessoria de Imprensa  </h4>
                            <article>
                            Para assegurar um pleno desenvolvimento de carreira e o seu reconhecimento pelo público 
                            e pela mídia, inovar e investir na divulgação da imagem, da marca e do trabalho são ações 
                            fundamentais. É aí que entra a assessoria de imprensa, que tem papel importante nesse processo, 
                            ao elaborar estratégias de ações com o objetivo de destacar o cliente na mídia (jornais, rádios, 
                            revistas e emissoras de televisão) e entre o público, através das redes sociais
                            </article>
                        
                        </Col>
                        <Col sm={6} className='list-image-Right'>
                        <img src='./02img_assesoria.png' alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Service