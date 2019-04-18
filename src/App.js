import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Parents from "./components/Parents";
import Login from "./components/Authintication";
import Navbar from "./components/Navbar";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
import Items from "./components/Items";

import StudentsList from "./components/StudentsList";
import StudentDetail from "./components/StudentDetail";
import StudentForm from "./components/StudentForm";
import StudentUpdate from "./components/StudentUpdate";
class App extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken();
    this.props.fetchStudentsList();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/Parents" component={Parents} />
          <Route path="/Login" component={Login} />
          <Route path="/items/:category?" component={Items} />
          <Route path="/add/student" component={StudentForm} />
          <Route
            path="/update/student/:studentID"
            render={props => (
              <StudentUpdate {...props} student={this.props.student} />
            )}
          />
          <Route
            path="/student/:studentID"
            render={props => <StudentDetail {...props} />}
          />
          <Route
            path="/students"
            render={props => (
              <StudentsList {...props} students={this.props.students} />
            )}
          />

          <Redirect to="/Login" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading,
    students: state.studentReducer.students,
    student: state.studentReducer.student
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
    fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
