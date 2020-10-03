import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
const Service = () => {
    return(
        <React.Fragment>
            <div className='sectionServices'>
                <Container>
                    <Row >
                        <Col sm={6} className='list-image-Left' >
                        <img  src='./01img_producao.png' alt=""/>
                        </Col>
                        <Col sm={6} className="list-text-Left">
                            <h4> 01/ </h4>
                            <h4> Produção Musical </h4>
                            <p>
                            O relacionamento com estúdios de gravação é essencial. 
                            Por isso, atuamos desde o registro sonoro até a masterização, de nível internacional. 
                            Nosso cast de colaboradores e parceiros inclui arranjadores, 
                            músicos, engenheiros e técnicos de som. 
                            Realizamos todo o processo de gravação, da escolha do estúdio à 
                            duplicação do produto final (CD/DVD ou outra mídia digital). 
                            </p>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6}  className="list-text-Right">
                            <h4> 02/ </h4>
                            <h4> Assessoria de Imprensa </h4>
                            <p>
                            Em meio à concorrência acirrada no mercado, inovar e investir na divulgação da imagem,
                            marca e trabalho é fundamental. É aí que entra a assessoria de imprensa, que tem papel
                            importante nesse processo, ao trabalhar estrategicamente ações que poderão dar destaque
                            aos clientes na mídia (jornais, rádios, redes sociais, revistas e emissoras de televisão).
                            </p>
                        
                        </Col>
                        <Col sm={6} className='list-image-Right'>
                        <img src='./02img_assesoria.png' alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className='list-image-Left'>
                        <img src='./04img_divulgacao.png' alt="" />
                        </Col>
                        <Col sm={6} className='list-text-Left' >
                            <h4> 03/ </h4>
                            <h4> Divulgação </h4>
                            <p>
                            Para o artista que deseja maior visibilidade, a divulgação nas emissoras de 
                            rádio é fundamental. Pesquisas apontam que, apesar da era da internet, o rádio
                            é um veículo primordial para a difusão e veiculação do trabalho musical e, consequentemente,
                            se tem aumento da exposição do artista e a venda de seu produto. 
                            </p>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} className='list-text-Left'>
                            <h4> 04/ </h4>
                            <h4> Shows </h4>
                            <p>
                            Oferecemos serviços diversos de entretenimento e marketing que vão contribuir
                            para destacá-lo no mercado e alavancar seus negócios, como shows, palestras 
                            motivacionais e produção de feiras e eventos.
                            </p>
                        
                        </Col>
                        <Col sm={6} className='list-image-Left'>
                        <img src='/05img_shows.png'  alt=""/>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} className='list-image-Right'>
                        <img src='./06img_distribuicao.png' alt="" />
                        </Col>
                        <Col sm={6} className='list-text-Left' >
                            <h4> 05/ </h4>
                            <h4> Distribuição </h4>
                            <p>
                            Oferecemos os serviços de distribuição da música nos formatos físicos
                            e pelas plataformas digitais, fazendo que sua música alcance várias regiões, 
                            estados e países. 
                            </p>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} className='list-text-Left'>
                            <h4> 06/ </h4>
                            <h4> Divulgação em Rádios </h4>
                            <p>
                            O rádio ainda é a ferramenta promocional mais poderosa que um artista pode
                            utilizar para alcançar o sucesso. A Naza oferece serviços de divulgação e
                            marketing musical, focada no artista que busca resultado positivo. 
                            Com uma abordagem estratégica, ágil e eficaz, a divulgação em rádio permite impulsionar
                            a carreira do artista de maneira significativa. Podemos desenvolver campanhas com foco 
                            nacional ou regional, de acordo com os objetivos do cliente.
                            </p>
                        
                        </Col>
                        <Col sm={6} className='list-image-Left'>
                        <img src='./07img_radio.png' alt="" />
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} className='list-image-Right' >
                        <img src='./08img_marketing.png' alt="" />
                        </Col>
                        <Col sm={6} className='list-text-Right' >
                            <h4> 07/ </h4>
                            <h4> Marketing Digital</h4>
                            <p>
                            O marketing digital está se tornando o fundamental método para divulgar 
                            marcas e produtos. Desenvolvemos estratégias de marketing digital eficazes 
                            que conectam sua marca ao seu público com criatividade e inovação. Os serviço incluem: 
                            gerenciamento de blog, marketing de conteúdo, e-mail marketing, anúncios gráficos, 
                            marketing de vídeo, anúncios digitais pagos, banners, anúncios para celular, analíticos e 
                            redirecionamento. 
                            </p>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} className='list-text-Left' >
                            <h4> 08/ </h4>
                            <h4> Agenciamento e Representação </h4>
                            <p>
                            A Naza é movida pela paixão de nossos clientes. Somos empenhados com a produção, 
                            a gestão e o desenvolvimento de nossos artistas. Agimos através dos diversos canais e 
                            ferramentas de divulgação, com um plano de marketing eficaz, para impulsionar carreiras e 
                            alavancar novas oportunidades de negócios para os clientes que representamos, com criatividade e inovação.  
                            </p>
                        
                        </Col>
                        <Col sm={6} className='list-image-Left'>
                        <img src='./09img_agenciamento.png' alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Service