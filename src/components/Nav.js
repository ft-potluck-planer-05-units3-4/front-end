import React, { useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Signup from './Signup';
import Inviting from "./Inviting";
import EventsList from "./EventsList";
import UserEventList from "./UserEventList";
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';
import { Nav as BootStrapNav, Navbar, NavItem, NavLink } from 'reactstrap';
import { eventLoader, load } from '../actions/eventActions';

function Nav(props) {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(load());
    eventLoader();
  }, [dispatch]);

  return (
    <>
      <Navbar light>
        <BootStrapNav>
          <Switch>
            <Route path='/attendee'>
              <NavItem>
                <NavLink tag={Link} to='/organizer'>
                  Organizer Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/attendee'>
                  Attendee Menu
                </NavLink>
              </NavItem>
            </Route>
            <Route path='/organizer'>
              <NavItem>
                <NavLink tag={Link} to='/organizer'>
                  Organizer Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/attendee'>
                  Attendee Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/add-event'>
                  Add Potluck
                </NavLink>
              </NavItem>
            </Route>
          </Switch>
        </BootStrapNav>
      </Navbar>
      <main>
        <Switch>
          <Route path='/invite-to/:id' component={Inviting}/>
          <Route path='/attendee'>
            <UserEventList/>
          </Route>
          <Route path='/organizer'>
            <EventsList/>
          </Route>
                  <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/add-event" component={AddEvent} />
          <Route path="/edit-event/:id" component={EditEvent} />
          <Route path="/">
            <Redirect to="/signup" /> {/* Replace Me */}
          </Route>
        </Switch>
      </main>
    </>
  )
};

export default Nav;
