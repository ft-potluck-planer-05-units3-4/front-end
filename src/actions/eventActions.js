export const ADD_EVENT = 'ADD_EVENT';
export const LOAD_DATA = 'LOAD_DATA';
export const SET_EVENTS = 'SET_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';

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

const deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    payload: id
  };
};

const editEvent = (event) => {
    return {
      type: EDIT_EVENT,
      payload: event
    };
};

export { setEvents, addEvent, deleteEvent, editEvent };
