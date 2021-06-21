import React from 'react';

import InviteCard from './InviteCard';

function InvitedList({invites}){
  return (
    <div className='invites'>
      {invites.map(invite => <InviteCard key={invite.id} invite={invite}/>)}
    </div>
  )
}

export default InvitedList;
