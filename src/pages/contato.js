import React from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
  Button,
  Container,
} from "react-bootstrap";
const Contato = () => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <div className="contact">
          <h2> Naza Music </h2>
          <p>
            Rua Bernardo Guimarães 895 - Sala 505
            <br />
            Savassi, Belo Horizonte, MG 30140-081
            <br />
            Telefone: (31) 97103 - 5457
            <br />
            Email: paulo@nazamusic.com
            <br />
          </p>
          <br />
        </div>
        <Form.Row>
          <div className="FormContato shadow-md">
            <h2> Entre em contato conosco </h2>
            <Col sm>
              <FormGroup className="infoContato">
                <Row>
                  <Col>
                    <FormLabel className="name-form"> Nome </FormLabel>
                    <FormControl type="text" placeholder="Nome" />
                  </Col>
                  <Col>
                    <FormLabel className="name-form"> Sobrenome </FormLabel>
                    <FormControl type="text" placeholder="Sobrenome" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <FormLabel className="name-form"> Email </FormLabel>
                <FormControl type="email" placeholder="nome@example.com" />
              </FormGroup>
              <FormGroup>
                <FormLabel className="name-form"> Telefone </FormLabel>
                <FormControl placeholder="(DDD) XXXXX - XXXX" />
              </FormGroup>
              <FormGroup>
                <FormLabel className="name-form"> Mais Informações </FormLabel>
                <FormControl as="textarea" rows="3" />
              </FormGroup>
              <Button className="botaoEnviar shadow-sm" variant="inline">
                {" "}
                Enviar{" "}
              </Button>
            </Col>
          </div>
        </Form.Row>
      </Container>
    </React.Fragment>
  );
};
export default Contato;
