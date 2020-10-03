import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './pages';
import News from './pages/news'


export default (props) => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path ="/news" component={News}/>
        </Switch> 
    </HashRouter>
)