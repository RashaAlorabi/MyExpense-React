import axios from "axios";
import * as actionTypes from "./actionTypes";
import * as actionCreatores from "./index";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const fetchStudentsList = () => {
  return async dispatch => {
    try {
      const res = await instance.get("students/list/");
      const studentsList = res.data;
      dispatch({
        type: actionTypes.FETCH_ALL_STUDENTS,
        payload: studentsList
      });
      console.log("student action", studentsList);
    } catch (err) {
      console.error("Error while fetching the students", err);
    }
  };
};

export const fetchStudentDetail = studentData => {
  return async dispatch => {
    try {
      const res = await instance.get(`student/${studentData.id}/detail/`);
      const student = res.data;
      dispatch({
        type: actionTypes.FETCH_STUDENT_DETAIL,
        payload: student
      });
    } catch (err) {
      console.error("Error while fetching the students", err);
    }
  };
};

// export const addStudent = () => {
//   return async dispatch => {
//     try {
//       const res = await instance.post("student/add/", {
//         name: name,
//         grade: grade,
//         health: health,
//         parent_id: parent_id,
//         email: email
//       });
//       const newStudent = res.data;
//       dispatch({
//         type: actionTypes.STUDENT_ADD,
//         payload: newStudent
//       });
//       //   history.push("/private");
//     } catch (err) {
//       console.error("Error while adding a student", err);
//     }
//   };
// };

// export const updateStudent = (name, grade, health) => {
//   return async dispatch => {
//     try {
//       const res = await instance.put(`student/${parentID}/update/`, {
//         name: name,
//         grade: grade,
//         health: health
//       });
//       const updatedStudent = res.data;
//       dispatch(fetchStudentDetail());
//       dispatch({
//         type: actionTypes.STUDENT_UPDATE,
//         payload: updatedStudent
//       });
//       //   history.push("/private");
//     } catch (err) {
//       console.error("Error while updating a student", err);
//     }
//   };
// };

// export const deleteStudent = studentID => {
//   return async dispatch => {
//     try {
//       const res = await instance.delete(`student/${studentID}/delete/`);
//       const deletedStudent = res.data;
//       dispatch(fetchStudentDetail());
//       dispatch({
//         type: actionTypes.STUDENT_DELETE,
//         payload: studentID
//       });
//       //   history.push("/private");
//     } catch (err) {
//       console.error("Error while delete a student", err);
//     }
//   };
// };
