import React from 'react';
import { connect } from 'react-redux';

import AttendingCard from './AttendingCard';

function AttendingList({events}) {
  <>
    {events.map(event => <AttendingCard key={event.id} event={event}/>)}
  </>
}

const state2props = (state) => ({
  events: state.events
});

export default connect(state2props)(AttendingList);
