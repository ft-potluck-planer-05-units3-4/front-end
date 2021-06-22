import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { connect } from 'react-redux';

import axios from 'axios';
const api = axios.create({
    baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

function Inviting() {
  const { push } = useHistory();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const apiCalls = [api.get('/users'), api.get(`/events/${id}/guests`)];
    Promise.all(apiCalls)
      .then(([userRes, guestRes]) => {
	const guestSet = new Set(guestRes.data.map(guest => guest.id));
	const returnUsers = userRes.data;
	returnUsers.forEach(user => {
	  user.invited = guestSet.has(user.id);
	});
	setUsers(returnUsers);
      })
      .catch(alert);
  }, []);

  const onChange = (e) => {
    const changedUser = users.find(user => user.id === Number(e.target.name));
    const returnUsers = users.map(user => {
      return (user === changedUser) ? {
	...user,
	invited: e.target.checked
      } : user;
    })
    setUsers(returnUsers);    
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };
  
  return (
    <form onSubmit={onSubmit}>
      { users.map(user => {
	return (
	  <label key={user.id}>
	    {user.name}
	    <input
	      name={user.id}
	      type='checkbox'
	      checked={user.invited}
	      onChange={onChange}
	    />
	  </label>
	);
      })}
      <button>Invite</button>
    </form>
  );
}

export default Inviting;
