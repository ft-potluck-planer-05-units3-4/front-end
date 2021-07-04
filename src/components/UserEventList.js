import React from 'react';
import { connect } from 'react-redux';
import InviteCard from './InviteCard';

function UserEventList(props){
  const { invites } = props;

  return (
    <div className="invites">
      { invites.map( ( invite ) => (
        <InviteCard key={ invite.id } invite={ invite } />
      ) ) }
    </div>
  );
}

const state2props = ( state ) => ( {
  invites: state.events.invites,
} );

export default connect(state2props)( UserEventList );
