import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import Login from "../Authintication/index"
import { Link } from "react-router-dom";

import "./style.css";
import Card from "../Card/Card";
import StudentRow from "./StudentRow";
import * as actionCreators from "../../store/actions/index";
import SearchBar from "../SearchBar";

class StudentsList extends Component {
  async componentDidMount() {
    await this.props.fetchStudentsList();
  }

  render() {
    let studentRow;
    let { filteredStudent,loading } =  this.props.Student
    if (loading) {
      return <div />;
    } else {
      if (this.props.match.params.Grade){
        studentRow = filteredStudent
          .filter(
            student => student.grade === `Grade ${this.props.match.params.Grade}`
          )
          .map(student => <StudentRow key={student.id} student={student} />);
      }else{
        studentRow = filteredStudent.map(student => <StudentRow key={student.id} student={student} />);
      }
    }
    let { user } = this.props.auth
    if (user){
      return (
        <div className="content my-4">
          <div className="mt-5">
          <SearchBar />
          </div>
          <div className="text-center mb-5">
            <div style={{backgroundColor:"rgb(27, 109, 150)", color:"white"}} className="col-12 mb-2 border p-2 animated zoomIn">
              <h1>قائمة الطلاب</h1>
            </div>
            <div className="row animated zoomIn">
                <div className="col-4"><h4>المرحلة الدراسية</h4></div>
                <div className="col-4"><h4>أسم الطالب</h4></div>
                <div className="col-4"><h4>رقم الطالب</h4></div>
            </div>
            <div className="text-center">
             {studentRow}
            </div>
          </div>
          </div>
      );
    }else{
      return (
      <div className="container">
      <div className="row mt-4 justify-content-md-center">
        <div className="col-12 text-center">
        <h1>
        GoodBye
        </h1>
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
  Student: state.studentReducer,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);

{/* <tr>
                          <th scope="col" className="th">
                            المرحلة الدراسية{" "}
                          </th>
                          <th scope="col" className="th">
                            اسم الطالب
                          </th>
                          <th scope="col" className="th">
                            رقم الطالب
                          </th>
                        </tr> */}