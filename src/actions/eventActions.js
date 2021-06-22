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
