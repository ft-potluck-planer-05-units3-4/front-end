import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { eventReducer } from "./eventReducer";

export const rootReducer = combineReducers({
  userReducer: userReducer,
  eventReducer: eventReducer,
});
