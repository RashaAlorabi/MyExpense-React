// API Requests
import axios from "axios";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
});

export const fetchSchool = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/school/profile/");
      const schoolProfile = res.data;
      dispatch({
        type: actionTypes.FETCH_SCHOOL_PROFILE,
        payload: schoolProfile
      });
    } catch (error) {
      console.log("Something went wrong with ", error);
    }
  };
};
