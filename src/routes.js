import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import List from './pages/List';
import Details from './pages/Details';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List} />
            <Route path="/details/:title" component={Details} />
        </Switch>
    </BrowserRouter>
);

export default Routes;