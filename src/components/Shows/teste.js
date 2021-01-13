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
import { Paper } from "@material-ui/core";

const Shows = () => {
  return (
    <React.Fragment>
      <Container fluid={true} className="FormCental">
        <Form.Row>
          <Col sm>
            <h1 className="titleForm shadow-sm">Reserva de Shows</h1>
            <div className="FirstForm">
              <Form>
                <FormGroup className="select-Artists">
                  <FormLabel className="name-form">
                    Selecione um Artista
                  </FormLabel>
                  <FormControl as="select" placeholder="Selecione o Artista">
                    <option> Fonseec </option>
                    <option> George </option>
                    <option> Murilo </option>
                    <option> Maycon Mendes</option>
                    <option> Dr Hausen</option>
                    <option> Tadeu Franco</option>
                    <option> Márcio Nagô</option>
                    <option> Danilo Alê </option>
                    <option> Hudson de Souza </option>
                  </FormControl>
                </FormGroup>
                <FormGroup className="selectArtists">
                  <FormLabel className="name-form">
                    {" "}
                    Informações Adicionais{" "}
                  </FormLabel>
                  <FormControl as="textarea" rows="3" />
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col sm>
            <div className="title-Contato shadow-sm">
              <h1> Promotor </h1>
              <h2>Contato</h2>
            </div>
            <Form>
              <FormGroup className="info-Contato">
                <Row>
                  <Col>
                    <FormLabel className="name-form">Nome</FormLabel>
                    <FormControl type="text" placeholder="Nome" />
                  </Col>
                  <Col>
                    <FormLabel className="name-form">Sobrenome</FormLabel>
                    <FormControl type="text" placeholder="Sobrenome" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <FormLabel className="name-form">Email</FormLabel>
                <FormControl type="email" placeholder="nome@example.com" />
              </FormGroup>
              <FormGroup>
                <FormLabel className="name-form">Telefone</FormLabel>
                <FormControl placeholder="(DDD) XXXXX-XXXX" />
              </FormGroup>
            </Form>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col sm>
            <div className="title-Evento shadow-sm">
              <h1>Local / Detalhes do evento </h1>
            </div>
            <Form>
              <FormGroup className="info-Evento">
                <Row>
                  <Col>
                    <FormLabel className="name-form">Capacidade</FormLabel>
                    <FormControl />
                  </Col>
                  <Col>
                    <FormLabel className="name-form">
                      Tempo de Performace
                    </FormLabel>
                    <FormControl />
                  </Col>
                </Row>
                <FormGroup>
                  <FormLabel className="name-form">Nome do Evento</FormLabel>
                  <FormControl />
                </FormGroup>
              </FormGroup>
              <FormGroup className="infoEvento">
                <FormLabel className="name-form"> Mais Informações </FormLabel>
                <FormControl as="textarea" rows="3" />
              </FormGroup>
              <Button className="botao-enviar shadow-sm" variant="inline">
                {" "}
                Enviar solicitação
              </Button>
            </Form>
          </Col>
        </Form.Row>
      </Container>
    </React.Fragment>
  );
};
export default Shows;
