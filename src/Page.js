import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'; //  BrowserRouter HashRouter
import App from './App';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app" push />} />
      <Route path="/app" component={App} />
    </Switch>
  </Router>
);
