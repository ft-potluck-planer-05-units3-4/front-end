import React from 'react';
import { connect } from 'react-redux';

import EventCard from './EventCard';

function EventsList({events}) {
  return (
    <div className='organizer'>
      { events.map(event => <EventCard key={event.id}/>)}
    </div>
  )
}

const state2props = (state) => ({
  events: state.events
});

export default connect(state2props)(EventsList);
