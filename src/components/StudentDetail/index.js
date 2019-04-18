import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import * as actionCreators from "../../store/actions/index";

class StudentDetail extends Component {
  render() {
    // let student = {};
    // if (
    //   this.props.students.find(
    //     student => student.id == this.props.match.params.studentID
    //   )
    // ) {
    //   student = this.props.students.find(
    //     student => student.id == this.props.match.params.studentID
    //   );
    let student = {};
    if (this.props.loading) {
      return (student = <div />);
    } else {
      student = this.props.student;
      console.log("student detail", student.parent);
      return (
        <div className="card">
          <div className="card-body">
            Name: {student.name} Grad:{student.grade} Health:{student.health}
            Limit {student.limit}
            Parent {student.parent && student.parent.user.username}
            <Link to={`/update/student/${student.id}/`}>
              <button onClick={() => this.props.fetchStudentDetail(student.id)}>
                <i className="fas fa-pencil-alt" />
              </button>
            </Link>
          </div>
          <button
            onClick={() =>
              this.props.deleteStudent(student.id, this.props.history)
            }
          >
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading,
    student: state.studentReducer.student
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStudentDetail: studentID =>
      dispatch(actionCreators.fetchStudentDetail(studentID)),
    deleteStudent: (studentID, history) =>
      dispatch(actionCreators.deleteStudent(studentID, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
