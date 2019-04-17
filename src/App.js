import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

import StudentsList from "./components/StudentsList";
import StudentDetail from "./components/StudentDetail";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchStudentsList();
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/student/:studentID" component={StudentDetail} />
          <Route
            path="/students"
            render={props => (
              <StudentsList {...props} students={this.props.students} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading,
    students: state.studentReducer.students
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
