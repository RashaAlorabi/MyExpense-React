// ActionTypes

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  parents: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PARENTS:
      return {
        ...state,
        parents: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
