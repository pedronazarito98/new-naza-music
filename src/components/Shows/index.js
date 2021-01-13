import React from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import { Formik, Form as FormFormik, Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
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

const StylePaper = {
  display: "flex",
  flexWrap: "wrap",
  width: 750,
  marginTop: 30,
  justifyContent: "center",
  marginBottom: 20,
};

const ContainerTitle = {
  width: 700,
  backgroundColor: "rgba(212, 207, 207, 0.644)",
  padding: 10,
  textAlign: "center",
  marginBottom: 10,
};
const Shows = () => {
  return (
    <>
      <div>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper style={StylePaper} elevation={3}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              m={1}
              p={1}
            >
              <Form.Row>
                <Col sm style={{ marginTop: 20, marginBottom: 20 }}>
                  <h1 style={ContainerTitle}>Reserva de Shows</h1>
                  <div className="FirstForm">
                    <Form>
                      <FormGroup className="select-Artists">
                        <FormLabel className="name-form">
                          Selecione um Artista
                        </FormLabel>
                        <FormControl
                          as="select"
                          placeholder="Selecione o Artista"
                        >
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
                  <div style={ContainerTitle}>
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
                      <FormControl
                        type="email"
                        placeholder="nome@example.com"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel className="name-form">Telefone</FormLabel>
                      <FormControl placeholder="(DDD) XXXXX-XXXX" />
                    </FormGroup>
                  </Form>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col sm style={{ marginBottom: 20 }}>
                  <div style={ContainerTitle}>
                    <h1>Local / Detalhes do evento </h1>
                  </div>
                  <Form>
                    <FormGroup className="info-Evento">
                      <Row>
                        <Col>
                          <FormLabel className="name-form">
                            Capacidade
                          </FormLabel>
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
                        <FormLabel className="name-form">
                          Nome do Evento
                        </FormLabel>
                        <FormControl />
                      </FormGroup>
                    </FormGroup>
                    <FormGroup className="infoEvento">
                      <FormLabel className="name-form">
                        {" "}
                        Mais Informações{" "}
                      </FormLabel>
                      <FormControl as="textarea" rows="3" />
                    </FormGroup>
                    <Button
                      style={{ backgroundColor: "rgb(211, 22, 22)" }}
                      variant="inline"
                    >
                      {" "}
                      Enviar solicitação
                    </Button>
                  </Form>
                </Col>
              </Form.Row>
            </Box>
          </Paper>
        </Grid>
      </div>
    </>
  );
};
export default Shows;
