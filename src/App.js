import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import {
  createStore,
  applyMiddleware
} from 'redux';
import rootReducer from './reducers';

import PrivateRoute from './utils/privateRoute';
import Signup from './components/Signup';
import Protected from './components/Protected';
import Unprotected from './components/Unprotected';
const store = createStore( rootReducer, applyMiddleware( ReduxThunk ) );

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute path="/protected" component={Protected}/>
          <Route path="/" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
