// Combine
import { combineReducers } from "redux";

// Reducers
import itemReducer from "./itemReducer";
// Combining the reducers
export default combineReducers({
  items: itemReducer
});
