import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import PrivateRoute from './utils/privateRoute';
import LoginSignup from './components/Login-Signup';
import Inviting from './components/Inviting';
import Nav from './components/Nav';


const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
	<div className="App">
     	  <Switch>
	    <PrivateRoute path='/organizer' component={Nav}/>
	    <Route path='/' component={LoginSignup}/>
     	  </Switch>
	</div>
      </Router>
    </Provider>
  );
}

export default App;
