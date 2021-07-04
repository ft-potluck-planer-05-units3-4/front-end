import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import {
  createStore,
  applyMiddleware
} from 'redux';
import rootReducer from './reducers';

// import PrivateRoute from './utils/privateRoute';
import Nav from './components/Nav';
import Signup from './components/Signup';
const store = createStore( rootReducer, applyMiddleware( ReduxThunk ) );

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Nav} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
