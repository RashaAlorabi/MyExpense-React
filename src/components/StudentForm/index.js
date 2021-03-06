import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as actionCreators from "../../store/actions/index";
import Card from "../Card/Card";
import "./style.css";
import Login from "../Authintication/index"

class StudentForm extends Component {
  state = {
    parent_id: "",
    email: "",
    name: "",
    grade: "",
    limit: "",
    health: "",
    image: "",
    image_file: "",
    alertUpload: false
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  submitStudent = event => {
    event.preventDefault();
    this.props.addStudent(this.state, this.props.history);
  };

  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onImageChange = () => {
    let filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      this.setState({
        image_file: fileToLoad,
        alertUpload: true,
        image: URL.createObjectURL(fileToLoad)
      });
      let fileReader = new FileReader();
      fileReader.readAsDataURL(fileToLoad);
    }
  };

  render() {
    const errors = this.props.errors;
    let grades = [
      "الصف الاول",
      "الصف الثاني",
      "الصف الثالث",
      "الصف الرابع",
      "الصف الخامس",
      "الصف السادس"
    ].map(grade => (
      <option key={grade} value={grade}>
        {grade}
      </option>
    ));
    let { user } = this.props.auth;
    if (user){
      return (
        <div className="content animated bounceInDown">
          <Container fluid>
            <Row>
              <Col md={12}>
                <Card 
                  title="تسجيل طالب"
                  addstudent
                  content={
                    <Row>
                      <div className="wrapper wrapper--w680 my-3">
                        <div className="card card-4">
                          <div className="card-body">
                            <form onSubmit={this.submitStudent}>
                              {!!errors.length && (
                                <div className="alert alert-danger" role="alert">
                                  {errors.map(error => (
                                    <p key={error}>{error}</p>
                                  ))}
                                </div>
                              )}
  
                              <label className="label">رقم هوية ولي الأمر</label>
  
                              <input
                                type="text"
                                className="form-control"
                                name="parent_id"
                                value={this.state.parent_id}
                                onChange={this.textChangeHandler}
                              />
  
                              <label className="label">بريد ولي الأمر</label>
  
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.textChangeHandler}
                              />
  
                              <label className="label">اسم الطالب رباعي</label>
  
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.textChangeHandler}
                              />
  
                              <label
                                htmlFor="exampleFormControlSelect1"
                                className="label"
                              >
                                المرحلة الدراسية
                              </label>
  
                              <select
                                className="form-control"
                                name="grade"
                                onChange={this.textChangeHandler}
                                value={this.state.grade}
                              >
                                {grades}
                              </select>
  
                              <label className="label">حد المصروف اليومي</label>
  
                              <input
                                type="text"
                                className="form-control"
                                name="limit"
                                value={this.state.limit}
                                onChange={this.textChangeHandler}
                              />
  
                              <label className="label">الحالة الصحية</label>
  
                              <input
                                type="text"
                                className="form-control"
                                name="health"
                                value={this.state.health}
                                onChange={this.textChangeHandler}
                              />
  
                              <label className="label">صورة الطالب</label>
  
                              <input
                                type="file"
                                className="form-control"
                                name="image_file"
                                placeholder="Pic"
                                onChange={this.onImageChange}
                                id="inputFileToLoad"
                              />
  
                              <button className="btn btn-primary" type="submit">
                                تسجيل
                              </button>
                            </form>
                          </div>
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
  errors: state.errorReducer.errors,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  addStudent: (studentData, history) =>
    dispatch(actionCreators.addStudent(studentData, history)),
  resetErrors: () => dispatch(actionCreators.resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
