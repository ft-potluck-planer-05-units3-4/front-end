import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiVGVzdGVyIiwidXNlcm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjQ5OTMxMDEsImV4cCI6MTYyNTU5NzkwMX0.-c7yrBn4ZTE7VQECaOe7Ke9a0FIDJynxGQS3185VRlE'
  }
});

export const ADD_EVENT = 'ADD_EVENT';
export const SET_EVENTS = 'SET_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const SET_INVITES = 'SET_INVITES';
export const DELETE_INVITE = 'DELETE_INVITE';
export const EDIT_INVITE = 'EDIT_INVITE';

// thunk usage example

// export const signUp = (user) => {
//     return (dispatch) => {
//         console.log(user)
//    api.post( '/auth/register', user )
//      .then( res => {
//        dispatch( { type: SIGNUP_SUCESS, payload: res.data.username } )
//        console.log( res.data );
//    })
//         return {type:SIGNUP_LOADING};
//     }
// }

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  };
};

const setInvites = (invites) => {
  return {
    type: SET_INVITES,
    payload: invites
  }
};

const editInvite = (invite) => {
  return {
    type: EDIT_INVITE,
    payload: invite
  };
};

const deleteInvite = (id) => {
  return {
    type: DELETE_INVITE,
    payload: id
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

export { deleteInvite, editInvite, setInvites, setEvents, addEvent, deleteEvent, editEvent };
