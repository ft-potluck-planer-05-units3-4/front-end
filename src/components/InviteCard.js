// import React from 'react';
import InviteFoodCard from './InviteFoodCard';

function InviteCard({invite}) {
  return (
    <div className='invite-card'>
      <h3>{invite.title}</h3>
      <p>Location: {invite.location}</p>
      <p>Date: {invite.month} {invite.day}, {invite.year}</p>
      <p>Times: {invite.start_time}-{invite.end_time}</p>
      { !!invite.food.length && (
        <>
          <h5>Food Requests: </h5>
          <ul>
            {invite.food.map(food => <InviteFoodCard key={food.id} food={food}/>)}
          </ul>
        </>
      )}
    </div>
  );
}

export default InviteCard;
