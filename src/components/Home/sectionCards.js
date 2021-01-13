import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Card, CardDeck } from "react-bootstrap";
import ModalNews from "../Modal/Modal";
const SectionCards = () => {
  return (
    <React.Fragment>
      <Container fluid="true" className="cards-home">
        <Row className="cards-home">
          <CardDeck>
            <Col sm>
              <Card className="cards" border="secondary">
                <Card.Img variant="top" src="./muriloCard.png" />
                <Card.Body>
                  <Card.Title>Notícias</Card.Title>
                  <Card.Text>Texto teste</Card.Text>
                  <Button className="btCard" variant="outline-secondary">
                    <a href="#/news"> Veja mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className="cards" border="secondary">
                <Card.Img variant="top" src="./muriloCard.png" />
                <Card.Body>
                  <Card.Title>Notícias</Card.Title>
                  <Card.Text>Texto teste</Card.Text>
                  <Button className="btCard" variant="outline-secondary">
                    <a href="#/news"> Veja mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className="cards" border="secondary">
                <Card.Img variant="top" src="./muriloCard.png" />
                <Card.Body>
                  <Card.Title>Notícias</Card.Title>
                  <Card.Text>Texto teste.</Card.Text>
                  <Button className="btCard" variant="outline-secondary">
                    <a href="#/news"> Veja mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className="cards" border="secondary">
                <Card.Img variant="top" src="./muriloCard.png" />
                <Card.Body>
                  <Card.Title>Notícias</Card.Title>
                  <Card.Text>Texto teste</Card.Text>
                  <Button className="btCard" variant="outline-secondary">
                    <a href="#/news"> Veja mais</a>
                  </Button>{" "}
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className="cards" border="secondary">
                <Card.Img variant="top" src="./muriloCard.png" />
                <Card.Body>
                  <Card.Title>Notícias</Card.Title>
                  <Card.Text>Texto teste</Card.Text>
                  <Button className="btCard" variant="outline-secondary">
                    <a href="#/news"> Veja mais</a>
                  </Button>{" "}
                </Card.Body>
              </Card>
            </Col>
          </CardDeck>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SectionCards;
