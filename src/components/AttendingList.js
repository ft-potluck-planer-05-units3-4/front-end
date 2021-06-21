import React from 'react';
import { connect } from 'react-redux';

import AttendingCard from './AttendingCard';

function AttendingList({attending}) {
  return (
    <div className='attending-list'>
      {attending.map(event => <AttendingCard key={event.id} event={event}/>)}
    </div>
  );
}

const state2props = (state) => ({
  attending: state.attending
});

export default connect(state2props)(AttendingList);
