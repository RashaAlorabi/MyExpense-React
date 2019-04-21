import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://172.20.10.2:30/api"
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
