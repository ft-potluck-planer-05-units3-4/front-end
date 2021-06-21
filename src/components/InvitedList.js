import React from 'react';

import InviteCard from './InviteCard';

function InvitedList(){
  return (
    <div className='invites'>
      {invites.map(invite => <InviteCard key={invite.id} invite={invite}/>)}
    </div>
  )
}

export default InvitedList;
