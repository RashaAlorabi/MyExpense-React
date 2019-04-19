import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./components/Authintication";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SidNav from "./components/SidNav";

import AddItem from "./components/Items/AddItem";
import UpdateItem from "./components/Items/UpdateItem";
import ItemDetail from "./components/Items/ItemDetail";


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
    await this.props.fetchSchool()
    this.props.fetchStudentsList();
    this.props.fetchItems();
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>

        <Navbar/>
        <div className="row">
          <div className="col-9 offset-1">
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Login" component={Login} />
      
              <Route path="/add/item" render={props => <AddItem {...props} />} />
              <Route
                path="/item/update/:itemId"
                render={props => <UpdateItem {...props} item={this.props.item} />}
              />
              <Route
                path="/item/detail/:itemId"
                render={props => <ItemDetail {...props} />}
              />
              <Route path="/items:category?" component={Items} />
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
                path="/students:Grade?"
                render={props => (
                  <StudentsList {...props} students={this.props.students} />
                )}
              />

              <Redirect to="/Login" />
            </Switch>
          </div>
          <div className="col-2 mt-2 border border-dark  mh-100" style={{backgroundColor: "rgba(68,80,88,0.7)"}}>
            <SidNav/>
          </div>
        </div>    
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
    fetchSchool: () => dispatch(actionCreators.fetchSchool()),
    
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),

    fetchItems: () => dispatch(actionCreators.fetchItems()),
    fetchCategories: () => dispatch(actionCreators.fetchCategories()),
    
    fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList()),
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
