// Redux
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducer
import rootReducer from "./reducers";

// React DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
