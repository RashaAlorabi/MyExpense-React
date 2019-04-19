import React, { Component } from "react";
import { connect } from "react-redux";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import * as actionCreators from "../../store/actions/index";

class StudentDetail extends Component {
  componentDidMount() {
    this.props.fetchStudentDetail(this.props.match.params.studentID);
  }
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
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-6">
              <div className="card">
                <img className="card-img-top" src={student.image} />
              </div>
            </div>
            <div class="col-md-6">
              <h5 className="card-title"> {student.name}</h5>
              <p className="card-text">{student.grade}</p>
              <p className="card-text">Health:{student.health}</p>
              <p className="card-text">
                Parent ID : {student.parent && student.parent.user.username}
              </p>
              <p className="card-text">Limit {student.limit}</p>
              {/* <p className="card-text">Wallet {student.parent.wallet}</p> */}
            </div>
            <Link to={`/update/student/${student.id}/`}>
              <button
                className="btn btn-primary"
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
