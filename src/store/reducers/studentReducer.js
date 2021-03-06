import * as actionTypes from "../actions/actionTypes";

const initialState = {
  students: [],
  filteredStudent: [],
  student: {},
  loading: true
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload,
        filteredStudent: action.payload,
        loading: false
      };
    case actionTypes.FETCH_STUDENT_DETAIL:
      return {
        ...state,
        student: action.payload,
        loading: false
      };
    case actionTypes.STUDENT_ADD:
      return {
        ...state,
        students: state.students.concat(action.payload),
        filteredStudent: state.students.concat(action.payload),
        loading: false
      };
    case actionTypes.STUDENT_UPDATE:
      let updatedStudent = state.students.find(
        student => student.id === action.payload.id
      );
      return {
        ...state,
        students: [...state.students],
        filteredStudent: [...state.students],
        loading: false
      };
    case actionTypes.STUDENT_DELETE:
      let newStudentList = state.students.filter(
        student => student.id !== parseInt(action.payload)
      );

      return {
        ...state,
        students: [...newStudentList],
        filteredStudent: [...newStudentList],
        loading: false
      };
    case actionTypes.FILTER_STUDENTS:
      return {
        ...state,
        filteredStudent: state.students.filter(student => {
          return `${student.name}`
              .toLowerCase()
              .includes(action.payload.toLowerCase());
        })
      };
    default:
      return state;
  }
};

export default classReducer;
