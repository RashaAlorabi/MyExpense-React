import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";
import style from "./style.css";
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
      <div className="wrapper wrapper--w680 my-3">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            <form onSubmit={this.submitStudent}>
              {!!errors.length && (
                <div className="alert alert-danger" role="alert">
                  {errors.map(error => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label"> Parent ID</label>
                    <div className="input-group-icon">
                      <input
                        type="text"
                        className="form-control"
                        name="parent_id"
                        placeholder="ID"
                        value={this.state.parent_id}
                        onChange={this.textChangeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Parent Email</label>
                    <div className="input-group-icon">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.textChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label"> Student Name</label>
                    <div className="input-group-icon">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.textChangeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Grade</label>
                    <div className="input-group-icon">
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
              </div>

              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label"> Daily Limit</label>
                    <div className="input-group-icon">
                      <input
                        type="text"
                        className="form-control"
                        name="limit"
                        placeholder="Limit"
                        value={this.state.limit}
                        onChange={this.textChangeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Student Health</label>
                    <div className="input-group-icon">
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
              </div>

              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Picture</label>
                    <div className="input-group-icon">
                      <input
                        type="file"
                        className="form-control"
                        name="image_file"
                        placeholder="Pic"
                        onChange={this.onImageChange}
                        id="inputFileToLoad"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-t-15">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
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
