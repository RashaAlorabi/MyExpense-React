import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style.css";

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
        <tr className="text-center">
          <th className="th">{student.grade}</th>
          <Link to={`/student/${student.id}/`}>
            <th className="tn">{student.name}</th>
          </Link>
          <th scope="row" className="th">
            {id}
          </th>
        </tr>
      </tbody>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.studentReducer.loading
});

export default connect(
  mapStateToProps,
  null
)(StudentRow);
