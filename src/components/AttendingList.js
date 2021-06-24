import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import AttendingCard from "./AttendingCard";

import axios from "axios";
const api = axios.create({
  baseURL: "https://potluck-planner1.herokuapp.com/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c",
  },
});

function AttendingList(props) {
  const [attending, setAttending] = useState([]);
  useEffect(() => {
    api
      .get("/events/users/1") // change to current users id
      .then((resX) => {
        const eventsNCalls = resX.data.organizedEvents.map((event) => {
          return {
            ...event,
            RSVP: 0,
            apiCall: api.get(`/events/${event.id}/guests`),
          };
        });
        eventsNCalls.forEach((event) => {
          event.apiCall
            .then((resY) => {
              event.RSVP = resY.data.find((user) => user.userID === 2).RSVP;
              event.RSVP = 1;
            })
            .catch(alert);
        });
        Promise.all(eventsNCalls.map((event) => event.apiCall))
          .then((vals) => {
            setAttending(eventsNCalls);
          })
          .catch(alert);
      })
      .catch(alert);
  }, []);
  return (
    <div className="attending-list">
      {attending.map((event) => (
        <AttendingCard key={event.id} event={event} />
      ))}
    </div>
  );
}

const state2props = (state) => ({
  attending: state.attending,
});

export default connect(state2props)(AttendingList);
