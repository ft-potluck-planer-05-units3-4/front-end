import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EventsList from './EventsList';
import InvitedList from './InvitedList';
import AttendingList from './AttendingList';

import { setEvents } from '../actions/eventActions';
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

function Nav() {
  useEffect(() => {
    api.get('/events')
      .then(res => {
	setEvents(res.data);
      })
      .catch(alert);
  }, []);
  return (
    <>
      <header>
	<Switch>
	  <Route path='/attendee'>
	    <Link to='/organizer'>
	      Organizer Menu
	    </Link>
	  </Route>
	  <Route path='/organizer'>
	    <Link to='/attendee'>
	      Attendee Menu
	    </Link>
	    <Link to='/add-event'>
	      Add Potluck
	    </Link>
	  </Route>
	</Switch>
      </header>
      <main>
	<Switch>
	  <Route path='/attendee'>
	    <InvitedList/>
	    <AttendingList/>
	  </Route>
	  <Route path='/organizer'>
	    <EventsList/>
	  </Route>
	</Switch>
      </main>
    </>
  )
};

export default connect(null, { setEvents })(Nav);
