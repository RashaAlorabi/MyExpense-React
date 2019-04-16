import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const fetchStudentsList = () => {
  return async dispatch => {
    try {
      const res = await instance.get("students/");
      const StudentsList = res.data;
      dispatch({
        type: actionTypes.FETCH_ALL_STUDENTS,
        payload: StudentsList
      });
    } catch (err) {
      console.error("Error while fetching the students", err);
    }
  };
};

export const fetchStudentDetail = studentData => {
  return async dispatch => {
    try {
      const res = await instance.get(`student/${studentData.id}/`);
      const StudentsList = res.data;
      dispatch({
        type: actionTypes.FETCH_ALL_STUDENTS,
        payload: StudentsList
      });
    } catch (err) {
      console.error("Error while fetching the students", err);
    }
  };
};

export const addStudent = studentData => {
  return async dispatch => {
    try {
      const res = await instance.post("student/add/", studentData);
      const newStudent = res.data;
      dispatch({
        type: actionTypes.STUDENT_ADD,
        payload: newStudent
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while adding a student", err);
    }
  };
};

export const UpdateStudent = studentData => {
  return async dispatch => {
    try {
      const res = await instance.put(
        `student/${studentData.id}/update`,
        studentData
      );
      const UpdatedStudent = res.data;
      dispatch({
        type: actionTypes.STUDENT_UPDATE,
        payload: UpdatedStudent
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while updating a student", err);
    }
  };
};

export const deleteStudent = student => {
  return async dispatch => {
    try {
      const res = await instance.delete(`student/${student.id}/delete/`);
      const student = res.data;
      dispatch({
        type: actionTypes.STUDENT_DELETE,
        payload: student
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while delete a student", err);
    }
  };
};
