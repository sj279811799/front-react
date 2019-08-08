import React from 'react';
import {
  Route,
  Switch,
  HashRouter,
} from 'react-router-dom';
import Home from './app/Home';
import User from './app/User';
import './axios';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="*" component={() => <div>404</div>} />
    </Switch>
  </HashRouter>
);

export default Routes;
