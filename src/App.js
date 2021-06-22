import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";

import PrivateRoute from "./utils/privateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import InviteList from "./components/InviteList";
import Nav from "./components/Nav";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/add-event" component={AddEvent} />
            <Route path="/invite-to/:id" component={InviteList} />
            <Route path="/edit-event/:id" component={EditEvent} />
            <Route path="/organizer" component={Nav} />
            <Route path="/attendee" component={Nav} />
            <Route path="/Login" component={ Login } />
              <Route path="/Signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
