import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "./pages";
import News from "./pages/news";
import Artistas from "./pages/artistas";
import Fonseec from "./pages/pageFonseec";
import Contato from "./pages/contato";
import Servicos from "./pages/servicos";
import Shows from "./pages/shows";
import Sobre from "./pages/sobre";
import SectionGeorge from "./pages/pageGeorge";
import SectionTadeu from "./pages/pageTadeu";
import SectionMurilo from "./pages/pageMurilo";

import SectionAluci from "./pages/pageAlucinoise";
import SectionNago from "./pages/pageNago";
import SectionBruno from "./pages/pageBruno";

export default (props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={News} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/artistas" component={Artistas} />
      <Route exact path="/Fonseec" component={Fonseec} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/servicos" component={Servicos} />
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/George" component={SectionGeorge} />
      <Route exact path="/Tadeu" component={SectionTadeu} />
      <Route exact path="/Murilo" component={SectionMurilo} />
      <Route exact path="/Alucinoise" component={SectionAluci} />
      <Route exact path="/Marcio-Nago" component={SectionNago} />
      <Route exact path="/Bruno-Cupertino" component={SectionBruno} />
    </Switch>
  </HashRouter>
);
