import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EventCard from './EventCard';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

function EventsList(props) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    api.get('/events')
      .then(res => {
	console.log(res);
	setEvents(res.data);
      })
      .catch(alert);
  }, []);
  return (
    <div className='organizer'>
      { events.map(event => <EventCard key={event.id} event={event}/>)}
    </div>
  )
}

const state2props = (state) => ({
  events: state.events
});

export default connect(state2props)(EventsList);
