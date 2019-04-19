import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/index";

import { Link, Redirect } from "react-router-dom";

class StudentRow extends Component {
  render() {
    let student, id;

    if (this.props.loading) {
      student = <div />;
    } else {
      student = this.props.student;
      id = student.id;
    }

    return (
      <tbody>
        <tr>
          <th scope="row">{id}</th>

          <Link to={`/student/${student.id}/`}>
            <td>{student.name}</td>
          </Link>
          <td>{student.grade}</td>
        </tr>
      </tbody>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchStudentDetail: studentID =>
//       dispatch(actionCreators.fetchStudentDetail(studentID))
//   };
// };
export default connect(
  mapStateToProps,
  null
)(StudentRow);
