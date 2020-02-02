import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import List from './pages/List';
import Publications from './pages/Publications';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List} />
            <Route path="/publications" component={Publications} />
        </Switch>
    </BrowserRouter>
);

export default Routes;