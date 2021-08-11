import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';

function Unprotected(){
  return (
    <div>
      <nav>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </nav>
      <Switch>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/'>
          <Redirect to='/signup'/>
        </Route>
      </Switch>
    </div>
  );
}

export default Unprotected;
