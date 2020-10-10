import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container} from 'react-bootstrap'




const SectionCards = () => {
    return(
        <React.Fragment>
            <Container fluid='true'>
                <Row  className='cards-home'>
                    <CardDeck>
                        <Col sm>
                            <Card className='cards'  border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Noticias</Card.Title>
                            <Card.Text>
                                Texto teste
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col sm>
                            <Card className='cards' border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Noticias</Card.Title>
                            <Card.Text>
                                Texto teste
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col sm>
                            <Card className='cards' border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Noticias</Card.Title>
                            <Card.Text>
                            Texto teste.
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card className='cards' border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Noticias</Card.Title>
                            <Card.Text>
                            Texto teste
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card className='cards'  border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Noticias</Card.Title>
                            <Card.Text>
                            Texto teste
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>
                    </CardDeck>
                </Row>
            </Container>
    </React.Fragment>
    )
}

export default SectionCards
