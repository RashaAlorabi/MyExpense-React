import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../Authintication"
import Card from "../Card/Card";
import * as actionCreators from "../../store/actions/index";

class StudentUpdate extends Component {
  state = {
    id: this.props.student.id,
    name: this.props.student.name,
    grade: this.props.student.grade,
    limit: this.props.student.limit,
    health: this.props.student.health,
    image: this.props.student.image,
    image_file: this.props.student.image_file,
    alertUpload: false
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  submitStudent = event => {
    event.preventDefault();
    this.props.updateStudent(this.state, this.props.history);
  };

  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onImageChange = () => {
    let filesSelected = document.getElementById("inputFileToLoad").files;
    console.log("image slected", filesSelected);
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      console.log("image slected 34", fileToLoad);
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
    let grades = [
      "Grade 1",
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "Grade 5",
      "Grade 6"
    ].map(grade => (
      <option key={grade} value={grade}>
        {grade}
      </option>
    ));
    const errors = this.props.errors;
    let {user} = this.props.auth
    if (user){
      return (
        <div className="content">
          <Container fluid>
            <Row className="row mt-">
              <Col md={12}>
                <Card
                  title="تحديث بيانات الطالب"
                  updatestudent
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
                                value={this.state.name}
                                onChange={this.textChangeHandler}
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
                                onChange={this.onImageChange}
                                id="inputFileToLoad"
                              />
  
                              <button className="btn btn-primary" type="submit">
                                تحديث
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
      return <Login/>
    }
  }
}

const mapStateToProps = state => ({
  errors: state.errorReducer.errors,
  student: state.studentReducer.student,
  auth:state.auth
});

const mapDispatchToProps = dispatch => ({
  updateStudent: (studentData, history) =>
    dispatch(actionCreators.updateStudent(studentData, history)),
  resetErrors: () => dispatch(actionCreators.resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentUpdate);
