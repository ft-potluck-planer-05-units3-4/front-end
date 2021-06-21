import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import PrivateRoute from './utils/privateRoute';
import LoginSignup from './components/Login-Signup';
import Inviting from './components/Inviting';
import Nav from './components/Nav';
import AddEvent from './components/AddEvent';


const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
	<div className="App">
     	  <Switch>
	    <Route path='/add-event' component={AddEvent}/>
	    <Route path='/invite-to/:id' component={Inviting}/>
	    <Route path='/organizer' component={Nav}/>
	    <Route path='/attendee' component={Nav}/>
	    <Route path='/' component={LoginSignup}/>
     	  </Switch>
	</div>
      </Router>
    </Provider>
  );
}

export default App;
