import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/Home';
import User from './pages/User';
import DeleteUser from './pages/DeleteUser';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={User} />
      <Route path="/update/:id" exact component={User} />
      <Route path="/delete/:id" exact component={DeleteUser} />
    </Switch>
  );
};

export default Routes;
