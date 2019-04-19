// API Requests
import axios from "axios";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
});

export const fetchParents = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/list/parent/");
      const parents = res.data;
      console.log("parents ===> action ==> ", parents.parents);
      dispatch({
        type: actionTypes.FETCH_PARENTS,
        payload: parents.parents
      });
    } catch (error) {
      console.log("Something went wrong with ", error);
    }
  };
};
