import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'

const SobreNos = () => {
    return (
        <React.Fragment>
            <Container fluid={true}>
                <Row>
                    <Card className="bg-dark text-white">
                        <Card.Img src="./backgroundKits2.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className='text-center'> Sobre Nós </Card.Title>
                            <Card.Text>
                            <p className='text-xl-center text-white '>
                                A meta da Naza é maximizar o potencial
                                de cada cliente e contribuir para que
                                o retorno do trabalho seja satisfatótio e lucrativo.
                            </p>
                            </Card.Text>
                            
                        </Card.ImgOverlay>
                    </Card>
                </Row>
                <Row>
                    <div className='textSobre'>
                        <h2>
                            "POSICIONA O ARTISTA NO MERCADO, 
                            AUMENTA SUA VISIBILIDADE NA MÍDIA, 
                            AMPLIA A AGENDA DE SHOWS E FAZ PARCERIAS JUNTO AOS 
                            EMPRESÁRIOS DE GRANDES NOMES DO CENÁRIO ARTÍSTICO."
                        </h2>
                        <p>
                            Somos a Naza Music Entreterimento, uma empresa criada em 2001, em Belo Horizonte,
                            dentro de uma concepção inovadora no mercado. Nesses mais de 17 anos de estrada,
                            ultrapassamos as fronteiras de uma gravadora e atuamos como uma agência musical
                            oferecendo uma estrutura completa para atender artistas e empresas de diversos segmentos.
                        </p>
                        <p>
                            Nossa equipe, motivada pela paixão à arte e suas conexões com a cultura, 
                            a tecnologia e o empreendedorismo, se dedica à prestação de serviços exclusivos e diferenciados, 
                            com reconhecido destaque no cenário musical e fonográfico.
                        </p>
                        <p>
                            Atendemos a um seleto grupo de talentosos artistas e marcas – jovens e consagrados. 
                            Nossas ações são estudadas, planejadas e estratégicas, 
                            seguindo um panorama direcionado ao sucesso.
                        </p>
                        <p>
                            A meta da Naza Music é maximizar o potencial de sucesso, 
                            o poder lucrativo e oportunidades de negócios para nossos artistas, 
                            compositores, colaboradores, parceiros e associados. 
                            Para nós, valores como comprometimento, ética, criatividade, 
                            iniciativa e persistência são essenciais para o desenvolvimento
                            e o lançamento de fortes produtos no mercado: conectando artistas, marcas e o público.
                        </p>
                    </div>
                </Row>
            </Container>


        </React.Fragment>
    )

}

export default SobreNos