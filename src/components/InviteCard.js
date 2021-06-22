import React from 'react';

function InviteCard({invite}) {
  return (
    <div className='invite-card'>
      <h3>{invite.title}</h3>
      <p>Host: {invite.userID}</p> {/* Change this to a username */}
      <p>Location: {invite.location}</p>
      <p>Date: {invite.month} {invite.day}, {invite.year}</p>
      <p>Times: {invite.start_time}-{invite.end_time}</p>
    </div>
  );
}

export default InviteCard;
