import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

class StudentForm extends Component {
  state = {
    parent_id: 0,
    email: "",
    name: "",
    grade: "",
    limit: 0,
    health: "",
    image: "",
    image_file: "",
    alertUpload: false
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  submitStudent = event => {
    event.preventDefault(); // privent refrech
    this.props.addStudent(this.state, this.props.history);
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
    const errors = this.props.errors;
    console.log(this.state.image);
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
    return (
      <div className="mt-5 p-2">
        {this.props.user && (
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
                <span className="input-group-text">Parent ID</span>
              </div>
              <input
                type="text"
                className="form-control"
                name="parent_id"
                value={this.state.parent_id}
                onChange={this.textChangeHandler}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Email</span>
              </div>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.textChangeHandler}
              />
            </div>
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
                onChange={this.textChangeHandler}
                value={this.state.grade}
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
            <input
              type="file"
              className="form-control"
              name="image_file"
              onChange={this.onImageChange}
              id="inputFileToLoad"
            />
            <input type="submit" />
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.errors,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addStudent: (studentData, history) =>
      dispatch(actionCreators.addStudent(studentData, history)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
