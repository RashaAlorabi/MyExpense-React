import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/api/"
  baseURL: "http://172.20.10.2:30/api"
});

export const fetchItems = () => {
  return async dispatch => {
    try {
      let res = await instance.get("list/item/");
      const items = res.data;
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
      const categoies = res.data;
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categoies
      });
    } catch (error) {
      console.log("Something went wrong with ", error);
    }
  };
};

export const fetchItemDetail = itemID => {
  return async dispatch => {
    try {
      const res = await instance.get(`item/detail/${itemID}/`);
      const item = res.data;
      dispatch({
        type: actionTypes.FETCH_ITEM_DETAIL,
        payload: item
      });
    } catch (error) {
      console.error("Something went wrong with  ", error);
    }
  };
};

export const addItem = (item, history) => {
  const formData = new FormData();
  formData.append("name", item.name);
  formData.append("price", item.price);
  formData.append("stock", item.stock);
  formData.append("description", item.description);
  formData.append("category", item.category);
  if (item.image_file !== "") {
    formData.append("image", item.image_file);
  }
  return async dispatch => {
    try {
      const res = await instance.post("create/item/", formData);
      const item = res.data;
      dispatch(fetchItems());
      history.push("/items");
      dispatch({
        type: actionTypes.CREATE_ITEM,
        payload: item
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const updateItem = (item, history) => {
  console.log("TCL: updateItem -> item.id", item.id);
  const formData = new FormData();
  formData.append("name", item.name);
  formData.append("price", item.price);
  formData.append("stock", item.stock);
  formData.append("description", item.description);
  formData.append("category", item.category);
  if (item.image_file !== "") {
    formData.append("image", item.image_file);
  }
  return async dispatch => {
    try {
      const res = await instance.put(`update/item/${item.id}/`, formData);
      const itemObj = res.data;
      dispatch(fetchItems());
      history.push("/items");
      dispatch({
        type: actionTypes.CREATE_ITEM,
        payload: itemObj
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const deleteItem = (itemID, history) => {
  return async dispatch => {
    try {
      const res = await instance.delete(`delete/item/${itemID}/`);
      const item = res.data;
      dispatch(fetchItems());
      dispatch({
        type: actionTypes.DELETE_ITEM,
        payload: itemID
      });
      history.push("/items");
    } catch (error) {
      console.error("Somthing went wrong with ", error);
    }
  };
};
