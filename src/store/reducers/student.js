import * as actionTypes from "../actions/actionTypes";

const initialState = {
  students: [],
  student: null,
  loading: true
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload,
        loading: false
      };

    case actionTypes.FETCH_STUDENT:
      return {
        ...state,
        student: action.payload,
        loading: false
      };
    case actionTypes.ADD_STUDENT:
      return {
        ...state,
        students: action.payload,
        loading: false
      };
    case actionTypes.STUDENT_UPDATE:
      let updatedStudent = state.students.find(
        student => student.id == action.payload.id
      );
      return {
        ...state,
        students: action.payload,
        loading: false
      };
    case actionTypes.STUDENT_DELETE:
      let newStudentList = state.students.filter(
        student => student.id !== parseInt(action.payload)
      );

      return {
        ...state,
        students: [...newStudentList],
        loading: false
      };
    default:
      return state;
  }
};

export default classReducer;
