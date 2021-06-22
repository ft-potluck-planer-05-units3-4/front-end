import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteEvent } from '../actions/eventActions';
import FoodList from './FoodList';

function EventCard(props){
  const { event } = props;
  return (
    <div className='event-card'>
      <h3>{event.title}</h3>
      <p>Location: {event.location}</p>
      <p>Start: {event.start}</p>
      <p>End: {event.end}</p>
      <ul>
	<li>
	  Who's Invited
	</li>
	{ event.invited.map(invitee => <li>{invitee.name}</li>)}
      </ul>
      <ul>
	<li>
	  Food Requests
	</li>
	{ event.food.map(item => <li>{item.name}</li>)}
      </ul>
      <button onClick={props.deleteEvent(event.id)}>
	Delete Event
      </button>
      <Link to={`/invite-to/${event.id}`}>
	Invite More
      </Link>
    
    </div>
  );
}

export default connect(null, { deleteEvent })(EventCard);
