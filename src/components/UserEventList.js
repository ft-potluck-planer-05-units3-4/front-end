import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InviteCard from './InviteCard';
import { loadInvites } from '../actions/eventActions';

function UserEventList(props){
  const { invites, loadInvites } = props;
  useEffect( () => {
    loadInvites();
  }, [loadInvites] );

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

export default connect( state2props, {
  loadInvites
} )( UserEventList );
