// API Requests
import axios from "axios";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchItems = () => {
  return async dispatch => {
    try {
      let res = await instance.get("list/item/");
      console.log("TCL: fetchItems -> res", res);
      const items = res.data;
      console.log("TCL: fetchItems -> items", items);
      dispatch({
        type: actionTypes.FETCH_ITEMS,
        payload: items
      });
    } catch (error) {
      console.log("Something went wrong with ", error);
    }
  };
};

export const fetchCategories = () => {
  return async dispatch => {
    try {
      let res = await instance.get("category/");
      console.log("TCL: fetchCategories -> res", res);
      const categoies = res.data;
      console.log("TCL: fetchCategories -> categoies", categoies);
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categoies
      });
    } catch (error) {
      console.log("Something went wrong with ", error);
    }
  };
};
export const addItem = item => {
  return async dispatch => {
    try {
      const res = await instance.post("create/item");
      const item = res.data;
      console.log("TCL: item", item);
      dispatch({
        type: actionTypes.CREATE_ITEM,
        payload: item
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const updateItem = item => {
  return async dispatch => {
    try {
      const res = await instance.put("update/item");
      const item = res.data;
      dispatch({
        type: actionTypes.CREATE_ITEM,
        payload: item
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const deleteItem = () => ({
  type: actionTypes.DELETE_ITEM,
  payload: null
});
