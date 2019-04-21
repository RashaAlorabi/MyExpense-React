import React, { Component } from "react";
import { connect } from "react-redux";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Card from "../Card/Card";
import * as actionCreators from "../../store/actions/index";
import "./styles.css";

//Move all in-line styling to a .css style sheet, then apply the styling rules here
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
      return (
        <div className="content">
          <Container fluid>
            <Row className="row mt-3">
              <Col md={12}>
                <Card
                  title="معلومات الطالب"
                  studentdetail
                  content={
                    <Row>
                      <div className="photo">
                        <img
                          style={{ height: "85%", width: "100%" }}
                          className="card-img-top my-3"
                          src={student.image}
                        />
                      </div>
                      <div className="description">
                        <h5 className="card-title my-2"> {student.name}</h5>
                        <p className="card-text">{student.grade}</p>
                        <p className="card-text">
                          الحالة الصحية :{student.health}
                        </p>
                        <p className="card-text">
                          رقم هوية ولي الأمر :{" "}
                          {student.parent && student.parent.user.username}
                        </p>
                        <p className="card-text">
                          حد الصرف اليومي : {student.limit}
                        </p>

                        {/* <p className="card-text">Wallet {student.parent.wallet}</p> */}

                        <Link to={`/update/student/${student.id}/`}>
                          <button
                            className="button"
                            onClick={() =>
                              this.props.fetchStudentDetail(student.id)
                            }
                          >
                            <i className="fas fa-pencil-alt" />
                          </button>
                        </Link>
                        <button
                          className="button"
                          onClick={() =>
                            this.props.deleteStudent(
                              student.id,
                              this.props.history
                            )
                          }
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button
                          className="button"
                          onClick={() => this.setState({ QR: true })}
                        >
                          <i className="fas fa-print" />
                        </button>
                        <div>
                          {this.state.QR && (
                            <QRCode
                              value={`http://localhost:3000/student/${
                                student.id
                              }/`}
                              errorCorrection={"Q"}
                              color={"#67a814"}
                              size={120}
                            />
                          )}
                        </div>
                      </div>
                    </Row>
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loading: state.studentReducer.loading,
  student: state.studentReducer.student
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
