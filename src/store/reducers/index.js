// Combine
import { combineReducers } from "redux";

// Reducers
import studentReducer from "./studentReducer";
import itemReducer from "./itemReducer";
// Combining the reducers
export default combineReducers({
  studentReducer: studentReducer,
  item: itemReducer
});
