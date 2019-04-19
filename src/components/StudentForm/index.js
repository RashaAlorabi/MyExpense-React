import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

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
      <div className="signup-form">
        <form onSubmit={this.submitStudent}>
          {!!errors.length && (
            <div className="alert alert-danger" role="alert">
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <h2> Enroll Student</h2>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="parent_id"
              placeholder="Parend ID"
              value={this.state.parent_id}
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={this.textChangeHandler}
                />
              </div>
              <div className="col-xs-6">
                <select
                  className="form-control"
                  name="grade"
                  placeholder="Grade"
                  onChange={this.textChangeHandler}
                  value={this.state.grade}
                >
                  {grades}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-6">
                <input
                  type="text"
                  className="form-control"
                  name="limit"
                  placeholder="Expense Limit"
                  value={this.state.limit}
                  onChange={this.textChangeHandler}
                />
              </div>
              <div className="col-xs-6">
                <input
                  type="text"
                  className="form-control"
                  name="health"
                  placeholder="Health"
                  value={this.state.health}
                  onChange={this.textChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control"
              name="image_file"
              placeholder="Pic"
              onChange={this.onImageChange}
              id="inputFileToLoad"
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errorReducer.errors,
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
