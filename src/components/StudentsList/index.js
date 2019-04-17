import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import StudentRow from "./StudentRow";

class StudentsList extends Component {
  componentDidMount() {
    this.props.fetchStudentsList();
  }
  render() {
    let studentRow;
    if (this.props.loading) {
      studentRow = <div />;
    } else {
      studentRow = this.props.students.map(student => (
        <StudentRow key={student.id} student={student} />
      ));
    }
    return (
      <div>
        <div>List of student</div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First name</th>
              <th scope="col">Grade </th>
            </tr>
          </thead>
          {studentRow}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading,
    students: state.studentReducer.students
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);
