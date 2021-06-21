import React from 'react';
import { connect } from 'react-redux';
import InviteCard from './InviteCard';

function InvitedList({invites}){
  return (
    <div className='invites'>
      {invites.map(invite => <InviteCard key={invite.id} invite={invite}/>)}
    </div>
  )
}

const state2props = (state) => ({
  invites: state.invites
});

export default connect(state2props)(InvitedList);
