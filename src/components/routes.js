import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Home from './home';
import RegisterProvider from './registerProvider';
import RegisterUnemployed from './registerUnemployed';
import About from './about';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/registerProvider' component={RegisterProvider} />
        <Route path='/registerUnemployed' component={RegisterUnemployed} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  )
};

export default Routes;
