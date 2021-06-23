import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteEvent } from '../actions/eventActions';

import AddFoodForm from './AddFoodForm';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

function EventCard(props){
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { event } = props;


  const onDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const onDeleteClose = () => {
    setDeleteOpen(false);
  };

  const onDelete = () => {
    api.delete(`/events/${event.id}`)
      .then(res => {
	props.deleteEvent(event.id)
      })
      .catch(alert);
  };
  return (
    <div className='event-card'>
      <h3>{event.title}</h3>
      <p>Location: {event.location}</p>
      <p>Date: {event.month} {event.day}, {event.year}</p>
      <p>Times: {event.start_time}-{event.end_time}</p>
      {/*      <ul>
	<li>
	  Who's Invited
	</li>
	{ event.invited.map(invitee => <li>{invitee.name}</li>)}
	</ul> */}
      <div className='food-list'>
	<h5>Food Requests</h5>
	<ul>
	  { event.food.map(item => <li key={item.id}>{item.name}</li>)}
	</ul>
      </div>
      <AddFoodForm/>
      { deleteOpen ? (
	<div className='delete-modal'>
	  Are you Sure?
	  <button onClick={onDelete}>
	    Yup
	  </button>
	  <button onClick={onDeleteClose}>
	    No I changed my mind
	  </button>
	</div>
      ) : (
	<button onClick={onDeleteOpen}>
	  Delete Event
	</button>
      ) }
      <Link to={`/invite-to/${event.id}`}>
	Invite More
      </Link>
      <Link to={`/edit-event/${event.id}`}>
	Edit
      </Link>
    </div>
  );
}

export default connect(null, { deleteEvent })(EventCard);
