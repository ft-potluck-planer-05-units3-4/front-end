const initialState = {
  attending: [],
  invites: [],
  events: [],
  isLoggedIn: false
};

function rootReducer(state = initialState, action) {
  switch(action.type){
  default:
    return state;
  }
}

export default rootReducer;
