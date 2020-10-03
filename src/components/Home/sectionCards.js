import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container} from 'react-bootstrap'




const SectionCards = () => {
    return(
        <React.Fragment>
            <Container fluid='true'>
                <Row >
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
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col sm>
                            <Card className='cards' border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card className='cards' border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Card Titlee</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                                <Button className='btCard' variant="outline-secondary"><a href='/news'> Veja mais</a></Button>{' '}
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card className='cards'  border='light'>
                            <Card.Img variant="top" src="./muriloCard.png" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
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
