import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../components/Footer/Footer.css'
// import '../css/styles.css'
// import '../components/Home/styles.css'
// import '../css/sectiontitles.css'
// import '../css/sectionServicos.css'
// import '../css/header.css'
// import '../css/cards.css'
// import '../css/sectionArtistas.css'
// import '../css/contato.css'
// import '../css/formShow.css'
// import '../css/sobre.css'
// import '../css/servicos.css'

import {Container } from 'react-bootstrap'



const MySite = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            
            <Container fluid={true}>
                <Header />
                <div>
                    
                    <Component {...pageProps} />
                    
                </div>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default MySite