const initialState = {
  attending: [],
  invites: [],
  events: [],
  isLoggedIn: false
};

function eventReducer(state = initialState, action) {
  switch(action.type){
  case "LOAD_DATA":
    return ({
      ...state,
      ...action.payload
    });
  case "ADD_EVENT":
    return ({
      ...state,
      events: [...state.events, action.payload]
    });
  case "SET_EVENTS":
    return ({
      ...state,
      events: action.payload
    });
  default:
    return state;
  }
}

export default eventReducer;
