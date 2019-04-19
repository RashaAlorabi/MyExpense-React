import * as actionTypes from "../actions/actionTypes";

const initialState = {
  errors: []
};

/* -- set all errors for login or singup or creat channel  -- */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return {
        ...state,
        errors: Object.keys(action.payload).map(key => `${action.payload[key]}`)
      };
    case actionTypes.RESET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
