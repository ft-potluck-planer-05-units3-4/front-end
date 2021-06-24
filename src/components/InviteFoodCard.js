import React from 'react';
import { useDispatch } from 'react-redux';

import { editInvite } from '../actions/eventActions';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

const currentUserID = 2;

function InviteFoodCard({item, invite}) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    api.put(`/food/${item.id}`, {
      eventID: item.eventID,
      userID: currentUserID,
      category: item.category,
      quantity: item.quantity,
      name: item.name
    })
      .then(res => {
        dispatch(editInvite({
          ...invite,

          food: invite.food.map(foodItem => {
            if(foodItem.id === item.id){
              return {
                ...foodItem,
                userID: currentUserID
              };
            } else {
              return foodItem;
            }
          })

        }));
      })
      .catch(alert);
  };

  console.log(invite);
  return (
    <li>
      <h5>{item.name}</h5>
      <p>Quantity: {item.quantity}</p>
      { item.userID || "Noone is Bringing this!" }
      { <button onClick={onClick}>I can bring this!</button>}
    </li>
  );
}

export default InviteFoodCard;
