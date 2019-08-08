import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import User from './User';

const Routes = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={User} />
    <Route path="*" component={() => <div>404 Not Found</div>} />
  </Switch>
);

export default Routes;
