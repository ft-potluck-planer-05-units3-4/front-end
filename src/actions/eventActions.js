import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});
export const ADD_EVENT = 'ADD_EVENT';
export const LOAD_DATA = 'LOAD_DATA';
export const SET_EVENTS = 'SET_EVENTS';

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  };
};

const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    payload: event
  };
};

const deleteEvent = (event) => {
};

const editEvent = (event) => {
};

export { setEvents, addEvent, deleteEvent, editEvent };
