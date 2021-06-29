import React, { useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Signup from './Signup';
import Inviting from "./Inviting";
import EventsList from "./EventsList";
import UserEventList from "./UserEventList";
import { Nav as BootStrapNav, Navbar, NavItem, NavLink } from 'reactstrap';
import { setEvents } from '../actions/eventActions';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiVGVzdGVyIiwidXNlcm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjQ5OTMxMDEsImV4cCI6MTYyNTU5NzkwMX0.-c7yrBn4ZTE7VQECaOe7Ke9a0FIDJynxGQS3185VRlE'
  }
});

function Nav(props) {
  const dispatch = useDispatch();
  useEffect(()=> {
    api.get('/events')
      .then(res => {
  const returnEvents = res.data.map(event => {
    return {
      ...event,
      food: api.get(`/events/${event.id}/food`),
      guests: api.get(`/events/${event.id}/guests`)
    };
  });
  returnEvents.forEach(event => {
    event.food
      .then(res => {
        event.food = res.data;
      })
      .catch(alert);
    event.guests
      .then(res => {
        event.guests = res.data;
      })
      .catch(alert);
  });
  const allApiCalls = returnEvents
        .map(event => event.food)
        .concat(returnEvents
          .map(event => event.guests));

  Promise.all(allApiCalls)
    .then(vals => {
      dispatch(setEvents(returnEvents));
    })
    .catch(alert);
      })
      .catch(alert);
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
          <Route path="/">
            <Redirect to="/signup" /> {/* Replace Me */}
          </Route>
         
     
        </Switch>
      </main>
    </>
  )
};

export default Nav;
