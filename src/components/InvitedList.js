import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import InviteCard from './InviteCard';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

function InvitedList(props){
  const [invites, setInvites] = useState([]);
  useEffect(() => {
    api.get('/events/users/1') // would like to be able to use id here
      .then(res => {
	setInvites(res.data.guestEvents); // once the api works, this will work straight up.
      })
      .catch(alert);
  },[]);
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
