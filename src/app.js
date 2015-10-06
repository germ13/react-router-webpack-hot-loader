import React from 'react';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Main from './components/Main';
import Vegetables from './components/Vegetables';
import Apple from './components/Apple';
import Bean from './components/Bean';
import Carrot from './components/Carrot';

import Animals from './components/Animals';
import Ant from './components/Ant';
import Buffalo from './components/Buffalo';
import Condor from './components/Condor';

const history = createBrowserHistory();

React.render(
    <Router history={history}>
    <Route path='/' name='main' component={Main}>
      <Route path='Animals' component={Animals}>
        <Route path='Ant' component={Ant} />
        <Route path='Buffalo' component={Buffalo} />
        <Route path='Condor' component={Condor} />
      </Route>
      <Route path='Vegetables' component={Vegetables}>
        <Route path='Apple' name='apple' component={Apple} />
        <Route path='Bean' name='beet' component={Bean} />
        <Route path='Carrot' name='carrot' component={Carrot} />
      </Route>
    </Route>
    </Router>,
     document.body);
