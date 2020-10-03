import React from 'react'
import {Container,Row,Col,Nav} from 'react-bootstrap'
const Footer = () => {
    return (
        <React.Fragment>
            
            <div className='main-footer'>
                <Container fluid={true}  >
                    <Row sm='auto' >
                        {/*Coluna 1*/}
                        <Col sm className='ml-8 p-8'>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/contato"> Contato </Nav.Link>
                            <Nav.Link href='/sobre'> Sobre </Nav.Link>
                            <Nav.Link href='/servicos'> Serviços </Nav.Link>
                            
                        </Nav>
                        </Col>
                        {/*Coluna 2*/}
                        <Col sm >
                            <h4 className='text-dark'> Explore a Naza Music </h4>
                            <ul className='list-unstyled'>
                                <img className='img-footer' src='./Logomarca_NAZA1.png' href='/' />
                            </ul>
                        </Col>
                        {/*Coluna 3*/}
                        <Col className='container' >
                            <h4 className='text-dark'> Siga-nos</h4>
                            <ul className='list-unstyled lista'>
                                
                                <li>
                                    <a className='icones' href='https://www.instagram.com/nazamusicgroup/' target='_blank'>
                                        <img  src='./instagram.png'/>
                                    </a>
                                </li>
                                <li>
                                    <a className='icones' href='https://twitter.com/NazaMusicGroup' target='_blank'>
                                        <img  src='./twitter.png'/>
                                    </a>
                                </li>
                                <li>
                                    <a className='icones' href='https://www.facebook.com/NazaMusicGroup' target='_blank'>
                                        <img src='./facebook.png'/>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <hr className='bg-red-800' />
                    <Row>
                        <p className='sub-footer'>
                            &copy;{new Date().getFullYear(1998)} NAZA MUSIC INC | Todos os direitos reservados | Termos e Serviços | Privacidade
                        </p>
                    </Row>
                </Container>
            </div>
        
        </React.Fragment>
    )
}
export default Footer