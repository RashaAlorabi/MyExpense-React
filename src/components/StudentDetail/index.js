import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import * as actionCreators from "../../store/actions/index";

class StudentDetail extends Component {
  render() {
    let student = {};
    if (
      this.props.students.find(
        student => student.id == this.props.match.params.studentID
      )
    ) {
      student = this.props.students.find(
        student => student.id == this.props.match.params.studentID
      );

      return (
        <div>
          <div>{student.name}</div>
          <div>{student.grade}</div>
          <div>{student.health}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading,
    students: state.studentReducer.students
  };
};

export default connect(
  mapStateToProps,
  null
)(StudentDetail);
