import React from 'react';

import { Router, Route, Redirect, browserHistory } from 'react-router';
import Main from './components/Main';
import Grid from './grid/components/Grid';

const Routes = () => (
  <Router history={browserHistory}>
    <Redirect from='/' to='/grid' />
    <Route path='/' component={Main}>
      <Route path='grid' component={Grid}/>
    </Route>
  </Router>   
)

export default Routes;