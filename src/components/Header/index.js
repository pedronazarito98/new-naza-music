import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container,Row,Col, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
    return (
        <React.Fragment>
        <div >
        <Container fluid={true}>
            <Row>
                <Col>
                <Navbar bg="transparent" expand='sm'  className='shadow-sm'>
                    <Navbar.Brand href="/">
                        <img className='mx-auto' src='./Logomarca_NAZA1.png' alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto p-6 ml-4">
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="#/news">Notícias</Nav.Link>
                        <Nav.Link href="#/servicos">Serviços</Nav.Link>
                        <Nav.Link href="#/shows">Shows</Nav.Link>
                        <Nav.Link href="#/sobre">Sobre</Nav.Link>
                        <Nav.Link href="#/contato">Contato</Nav.Link>
                        <NavDropdown title="Artistas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/artistaSolo"> Fonseec </NavDropdown.Item>
                            <NavDropdown.Item href="#/pageGeorge"> George Arrunateghi </NavDropdown.Item>
                            <NavDropdown.Item href="#/pageMurilo"> Murilo Santiago </NavDropdown.Item>
                            <NavDropdown.Item href="#/pageTadeu"> Tadeu Franco </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
                </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default Header