import React from 'react'
import {Figure, Dropdown, DropdownButton, Col, Container, Row} from 'react-bootstrap'


const CardMusic = () => {
    return(
        <React.Fragment>
            <Container fluid={true}>
                <Row>
                
                    
                        <Col>
                            <Figure>
                                <Figure.Image
                                    src='/fonseec-card1.jpg'
                                />
                                <DropdownButton id='dropdown-basic' variant='inline' title='Ouvir'>
                                    <Dropdown.Item href='#/action-1'> Spotify </Dropdown.Item>
                                    <Dropdown.Item href='#/action-2'> Youtube </Dropdown.Item>
                                    <Dropdown.Item href='#/action-3'> Deezer </Dropdown.Item>
                                </DropdownButton>
                            </Figure>
                        </Col>

                        <Col>
                            <Figure>
                                <Figure.Image
                                    src='/fonseec-card3.png'
                                />
                                <DropdownButton id='dropdown-basic' variant='inline' title='Ouvir'>
                                    <Dropdown.Item href='#/action-1'> Spotify </Dropdown.Item>
                                    <Dropdown.Item href='#/action-2'> Youtube </Dropdown.Item>
                                    <Dropdown.Item href='#/action-3'> Deezer </Dropdown.Item>
                                </DropdownButton>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    src='/fonseec-card3.png'
                                />
                                <DropdownButton id='dropdown-basic' variant='inline' title='Ouvir'>
                                    <Dropdown.Item href='#/action-1'> Spotify </Dropdown.Item>
                                    <Dropdown.Item href='#/action-2'> Youtube </Dropdown.Item>
                                    <Dropdown.Item href='#/action-3'> Deezer </Dropdown.Item>
                                </DropdownButton>
                            </Figure>
                        </Col>
                        
                        <div className='albuma'>
                            <Figure>
                                <Figure.Image 
                                    src='/img-fonseec1.png'
                                />
                            </Figure>
                        </div>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default CardMusic