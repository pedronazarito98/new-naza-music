import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "./pages";
import News from "./pages/news";
import Artistas from "./pages/artistas";
import Contato from "./pages/contato";
import Servicos from "./pages/servicos";
import Shows from "./pages/shows";
import Sobre from "./pages/sobre";

import SectionTadeu from "./pages/pageTadeu";
import SectionMurilo from "./pages/pageMurilo";
import SectionGeorge from "./pages/pageGeorge";
import { PageStephanie } from "./pages/pageStephanie";

export default (props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={News} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/artistas" component={Artistas} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/servicos" component={Servicos} />
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/George_Arrunateghi" component={SectionGeorge} />
      <Route exact path="/Tadeu" component={SectionTadeu} />
      <Route exact path="/Murilo" component={SectionMurilo} />
      <Route exact path="/Stephanie_Jacovine" component={PageStephanie} />
    </Switch>
  </HashRouter>
);
