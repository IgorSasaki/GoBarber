// Bibliotecas Externas
import React from 'react';
import { Switch } from 'react-router-dom';

// Componentes
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/signup' exact component={SignUp} />

      <Route path='/dashboard' exact isPrivate component={Dashboard} />
    </Switch>
  )
}

export default Routes;