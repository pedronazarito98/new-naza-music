import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Navbar bg="transparent" expand="md" className="shadow-sm">
          <Navbar.Brand href="/">
            <img className="mx-auto" src="./Logomarca_NAZA1.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto p-6 ml-4">
              <Nav.Link href="/"> Home </Nav.Link>
              {/* <Nav.Link href="#/news">Notícias</Nav.Link> */}
              <Nav.Link href="#/servicos">Serviços</Nav.Link>
              {/* <Nav.Link href="#/shows">Shows</Nav.Link> */}
              <Nav.Link href="#/sobre">Sobre</Nav.Link>
              <Nav.Link href="#/contato">Contato</Nav.Link>
              <NavDropdown title="Artistas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/Fonseec"> Fonseec </NavDropdown.Item>
                <NavDropdown.Item href="#/George">
                  George Arrunateghi
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Murilo">
                  Murilo Santiago
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Tadeu">Tadeu Franco</NavDropdown.Item>
                <NavDropdown.Item href="#/Alucinoise">
                  Alucinoise
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Marcio-Nago">
                  Marcio Nagô
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Bruno-Cupertino">
                  Bruno Cupertino
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Hans">Hans Landim</NavDropdown.Item>
                <NavDropdown.Item href="#/Lu-Toledo">
                  Lu Toledo
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Maycon-Mendes">
                  Maycon Mendes
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Hausen">
                  Dr Hausen & Mr Guay
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </React.Fragment>
  );
};

export default Header;
