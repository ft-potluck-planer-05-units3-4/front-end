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

const currentUserID = 2;  // change to user's id

function InvitedList(props){
  const [invites, setInvites] = useState([]);
  useEffect(() => {
    api.get('/events/')
      .then(res => {
	const guestListCalls = res.data.map(event => {
	  return api.get(`/events/${event.id}/guests`);
	});
	Promise.all(guestListCalls)
	  .then(vals => {
	    const eventIDs = new Set(vals.map(val => {
	      const invite = val.data.find(user => user.id === currentUserID);
	      return invite && invite.eventsID
	    }).filter(val => val));
	    setInvites(res.data.filter(event => eventIDs.has(event.id)));
	  })
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
