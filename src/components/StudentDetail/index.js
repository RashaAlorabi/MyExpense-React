import React, { Component } from "react";
import { connect } from "react-redux";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import * as actionCreators from "../../store/actions/index";

class StudentDetail extends Component {
  state = {
    QR: false
  };
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
        <div class="card">
          <img class="card-img-top" src={student.image} />
          <div class="card-body">
            <h5 class="card-title">Name: {student.name}</h5>
            <p class="card-text">{student.grade}</p>
            <p class="card-text">Health:{student.health}</p>
            <p class="card-text">
              Parent {student.parent && student.parent.user.username}
            </p>
            <p class="card-text">Limit {student.limit}</p>

            <Link to={`/update/student/${student.id}/`}>
              <button
                class="btn btn-primary"
                onClick={() => this.props.fetchStudentDetail(student.id)}
              >
                <i className="fas fa-pencil-alt" />
              </button>
            </Link>
            <button
              onClick={() =>
                this.props.deleteStudent(student.id, this.props.history)
              }
            >
              <i className="fas fa-trash-alt" />
            </button>
            <button onClick={() => this.setState({ QR: true })}>
              <i className="fas fa-print" />
            </button>
          </div>
          {this.state.QR && (
            <div className={"row example-wrapper"}>
              <div className={"col-xs-12 col-md-6 example-col"}>
                <QRCode
                  value={`http://localhost:3000/student/${student.id}/`}
                  errorCorrection={"Q"}
                  color={"#67a814"}
                  size={120}
                />
              </div>
            </div>
          )}
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
