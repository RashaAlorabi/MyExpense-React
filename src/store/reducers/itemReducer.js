// ActionTypes

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  categories: [],
  item: {},
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
      let updatedItem = state.items.find(item => item.id === action.payload.id);
      return {
        ...state,
        items: [...state.items],
        loading: true
      };
    case actionTypes.FETCH_ITEM_DETAIL:
      return {
        ...state,
        item: action.payload,
        loading: true
      };
    case actionTypes.DELETE_ITEM:
      let items = state.items.filter(item => item.id !== action.payload);

      return {
        ...state,
        items: [...items],
        loading: true
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
