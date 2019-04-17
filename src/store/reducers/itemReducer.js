// ActionTypes

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  categories: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: true
      };
    case actionTypes.CREATE_ITEM:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case actionTypes.UPDATE_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state
      };
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
