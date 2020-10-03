import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Footer/Footer.css'
import './css/styles.css'
import './components/Home/styles.css'
import './css/sectiontitles.css'
import './css/sectionServicos.css'
import './css/header.css'
import './css/cards.css'
import './css/sectionArtistas.css'
import './css/contato.css'
import './css/formShow.css'
import './css/sobre.css'
import './css/servicos.css'

import Routes from './routes';

const App = ({ Component, pageProps}) => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        {/* <div>          
          <Component {...pageProps} />
        </div> */}
        <Routes />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
