import React, { Component } from "react";
import { connect } from "react-redux";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import Login from "../Authintication/index";
import * as actionCreators from "../../store/actions/index";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./styles.css";

//Move all in-line styling to a .css style sheet, then apply the styling rules here
class StudentDetail extends Component {
  componentDidMount() {
    this.props.fetchStudentDetail(this.props.match.params.studentID);
  }
  getBase64(imageUrl) {}
  printPdf() {
    let content = document.getElementById("printCar");
    let pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    // pri.appendChild(content)
    pri.document.close();
    pri.focus();
    pri.print();
  }
  render() {
    let { user } = this.props.auth;
    let student = {};
    if (user) {
      if (this.props.loading) {
        return (student = <div />);
      } else {
        student = this.props.student;
        let idCardBase64 = "";
        this.getBase64(student.image, result => {
          idCardBase64 = result;
        });
        return (
          <div className="container text-center my-5">
            <div className="row text-center mt-5">
              <div className="col-4 offset-4">
                <div
                  className="Card border border-dark"
                  id="printCar"
                  style={{ width: "20rem", backgroundColor: "white" }}
                >
                  <div className="col-12 mt-5">
                    <img
                      src={student.image}
                      className="rounded mx-auto border border-dark"
                      style={{ height: 190, width: 190 }}
                    />
                  </div>
                  <div className="col-12 mt-4 mb-4">
                    <h1>{student.name}</h1>
                  </div>
                  <div className="col-12">
                    <QRCode
                      value={`http://172.20.10.2:30/api/student/${
                        student.id
                      }/detail/`}
                      errorCorrection={"Q"}
                      color={"#67a814"}
                      size={80}
                      renderAs={"svg"}
                    />
                  </div>
                  <div className="col-12 my-4">
                    <div style={{ fontSize: 15 }}>{student.grade}</div>
                  </div>
                </div>
              </div>
              <div className="col-1 offset-1 mt-5">
                <br />
                <br />
                <br /> <br />
                <Link to={`/update/student/${student.id}/`}>
                  <button
                    className="button"
                    onClick={() => this.props.fetchStudentDetail(student.id)}
                  >
                    <i className="fas fa-pencil-alt" style={{ fontSize: 20 }} />
                  </button>
                </Link>
                <button
                  className="button"
                  onClick={() =>
                    this.props.deleteStudent(student.id, this.props.history)
                  }
                >
                  <i className="fas fa-trash-alt" style={{ fontSize: 20 }} />
                </button>
                <button className="button" onClick={() => this.printPdf()}>
                  <i className="fas fa-print" style={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
            <iframe
              id="ifmcontentstoprint"
              style={{ height: "0px", width: "0px", position: "absolute" }}
            />
          </div>
        );
      }
    } else {
      return (
        <div className="container">
          <div className="row mt-4 justify-content-md-center">
            <div className="col-12 text-center">
              <h1>GoodBye</h1>
            </div>
            <div>
              <Link
                to="/Login"
                className="btn btn-light"
                style={{ backgroundColor: "rgb(27, 109, 150)" }}
              >
                <i
                  className="fas fa-sign-out-alt"
                  style={{ color: "rgb(245, 246, 241)" }}
                >
                  {" "}
                  تسجيل دخول
                </i>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loading: state.studentReducer.loading,
  student: state.studentReducer.student,
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  fetchStudentDetail: studentID =>
    dispatch(actionCreators.fetchStudentDetail(studentID)),
  deleteStudent: (studentID, history) =>
    dispatch(actionCreators.deleteStudent(studentID, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
