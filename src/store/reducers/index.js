// Combine
import { combineReducers } from "redux";

// Reducers
import itemReducer from "./itemReducer";
import parentsReducer from "./parentReducer";
import authReducer from "./authentication";
import errorReducer from "./errors";
import school from "./schoolProfile";
import studentReducer from "./studentReducer";

// Combining the reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  studentReducer: studentReducer,
  parents: parentsReducer,
  school: school,
  items: itemReducer
});
