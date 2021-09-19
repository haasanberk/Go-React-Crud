import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/Home';
import NewUser from './pages/New';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={NewUser} />
    </Switch>
  );
};

export default Routes;
