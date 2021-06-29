import React from "react";
import { useDispatch } from "react-redux";

import { editInvite } from "../actions/eventActions";

import axios from "axios";
const api = axios.create({
  baseURL: "https://potluck-planner1.herokuapp.com/api",
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiVGVzdGVyIiwidXNlcm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjQ5OTMxMDEsImV4cCI6MTYyNTU5NzkwMX0.-c7yrBn4ZTE7VQECaOe7Ke9a0FIDJynxGQS3185VRlE',
  },
});

const currentUserID = 2;

function InviteFoodCard({ item, invite }) {
  const dispatch = useDispatch();
  const onBring = () => {
    api
      .put(`/food/${item.id}`, {
        eventID: item.eventID,
        userID: currentUserID,
        category: item.category,
        quantity: item.quantity,
        name: item.name,
      })
      .then((res) => {
        dispatch(
          editInvite({
            ...invite,

            food: invite.food.map((foodItem) => {
              if (foodItem.id === item.id) {
                return {
                  ...foodItem,
                  userID: currentUserID,
                };
              } else {
                return foodItem;
              }
            }),
          })
        );
      })
      .catch(alert);
  };

  const onCancel = () => {
    api
      .put(`/food/${item.id}`, {
        eventID: item.eventID,
        userID: null,
        category: item.category,
        quantity: item.quantity,
        name: item.name,
      })
      .then((res) => {
        dispatch(
          editInvite({
            ...invite,

            food: invite.food.map((foodItem) => {
              if (foodItem.id === item.id) {
                return {
                  ...foodItem,
                  userID: null,
                };
              } else {
                return foodItem;
              }
            }),
          })
        );
      })
      .catch(alert);
  };

  return (
    <>
      <h5>{item.name}</h5>
      <p>Quantity: {item.quantity}</p>
      Brought by:
      {item.userID || "Noone is Bringing this!"}
      {!item.userID && <button onClick={onBring}>I can bring this!</button>}
      {item.userID === currentUserID && (
        <button onClick={onCancel}>I don't want to bring this!</button>
      )}
    </>
  );
}

export default InviteFoodCard;
