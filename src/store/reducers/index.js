// Combine
import { combineReducers } from "redux";

// Reducers
import itemReducer from "./itemReducer";
import parentsReducer from "./parentReducer";
import authReducer from "./authentication";
import errorReducer from "./errors";
import school from "./schoolProfile";

// Combining the reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  parents: parentsReducer,
  school: school,
  items: itemReducer
});
