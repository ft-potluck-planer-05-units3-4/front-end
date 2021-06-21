import React from 'react';

import FoodRequestList from './FoodRequestList';

function AttendingCard({event}) {
  return (
    <div className='attending-card'>
      <h3>{event.title}</h3>
      <p>Location: {event.location}</p>
      <p>Starts: {event.start}</p>
      <p>Ends: {event.end}</p>
      <FoodRequestList foodRequests={event.food}/>
    </div>
  )
}

export default AttendingCard;
    
