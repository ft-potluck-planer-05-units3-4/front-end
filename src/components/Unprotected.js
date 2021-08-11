import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './Signup'
import Login from './Login'

function Unprotected(){
  return (
    <Switch>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route path='/' component={Signup}/>
    </Switch>
  );
}

export default Unprotected;
