import React, { Component } from "react";
import { connect } from "react-redux";

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
    event.preventDefault(); // privent refrech
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
    const student = this.props.student;
    console.log("student update ---", student);
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitStudent}>
          {!!errors.length && (
            <div className="alert alert-danger" role="alert">
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Student name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Student grade</span>
            </div>
            <select
              className="form-control"
              name="grade"
              value={this.state.name}
              onChange={this.textChangeHandler}
            >
              {grades}
            </select>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Student expense limit</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="limit"
              value={this.state.limit}
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Student health</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="health"
              value={this.state.health}
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Student image</span>
            </div>
            <input
              type="file"
              className="form-control"
              name="image_file"
              onChange={this.onImageChange}
              id="inputFileToLoad"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errorReducer.errors,
    student: state.studentReducer.student
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStudent: (studentData, history) =>
      dispatch(actionCreators.updateStudent(studentData, history)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentUpdate);
