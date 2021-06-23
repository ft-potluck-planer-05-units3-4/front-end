import {
  EDIT_EVENT, ADD_EVENT, LOAD_DATA, SET_EVENTS, DELETE_EVENT
} from '../actions/eventActions';

const initialState = {
  attending: [],
  invites: [],
  events: []
};

function eventReducer(state = initialState, action) {
  switch(action.type){
  case EDIT_EVENT:
    const returnEvents = state.events.map(event => {
      if (event.id === action.payload.id){
	return {
	  ...event,
	  ...action.payload
	};
      } else {
	return event;
      }
    });
    return {
      ...state,
      events: returnEvents
    };
  case DELETE_EVENT:
    return ({
      ...state,
      events: state.events.filter(event => event.id !== action.payload)
    });
  case LOAD_DATA:
    return ({
      ...state,
      ...action.payload
    });
  case ADD_EVENT:
    return ({
      ...state,
      events: [...state.events, action.payload]
    });
  case SET_EVENTS:
    return ({
      ...state,
      events: action.payload
    });
  default:
    return state;
  }
}

export default eventReducer;
