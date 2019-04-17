// Combine
import { combineReducers } from "redux";

// Reducers
import itemReducer from "./itemReducer";
import parentsReducer from "./parentReducer";
import authReducer from "./authentication";
import errorReducer from "./errors";

// Combining the reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  item: itemReducer,
  parents: parentsReducer,
});
