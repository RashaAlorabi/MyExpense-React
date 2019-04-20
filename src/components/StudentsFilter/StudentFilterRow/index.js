import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StudentFilterRow extends Component {
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

const mapStateToProps = state => ({
  loading: state.studentReducer.loading
});

export default connect(
  mapStateToProps,
  null
)(StudentFilterRow);
