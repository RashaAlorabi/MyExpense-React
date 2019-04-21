import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import * as actionCreators from "./store/actions/index";
import "./App.css";

import Navbar from "./components/Navbar";
import SidNav from "./components/SidNav";
import Home from "./components/Home";
import Login from "./components/Authintication";

import Items from "./components/Items";
import AddItem from "./components/Items/AddItem";
import UpdateItem from "./components/Items/UpdateItem";
import ItemDetail from "./components/Items/ItemDetail";

import StudentsList from "./components/StudentsList";
import StudentDetail from "./components/StudentDetail";
import StudentForm from "./components/StudentForm";
import StudentUpdate from "./components/StudentUpdate";
import pic2 from "./assets/img/pic2.png";

class App extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken();
    await this.props.fetchSchool();
    this.props.fetchStudentsList();
    this.props.fetchItems();
    this.props.fetchCategories();
  }
  async componentDidUpdate(prevProps){
    if (this.props.auth.user !== prevProps.auth.user){
      // await this.props.checkForExpiredToken();
      await this.props.fetchSchool();
      await this.props.fetchItems();
      await this.props.fetchStudentsList();
      await this.props.fetchCategories();
    }
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(${pic2})` }} className="body">
        <Navbar />
        <div className="row">
          <div className="col-9 offset-1">
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Login" component={Login} />

              <Route
                path="/add/item"
                render={props => <AddItem {...props} />}
              />
              <Route
                path="/item/update/:itemId"
                render={props => (
                  <UpdateItem {...props} item={this.props.item} />
                )}
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
          <div
            className="col-2 mt-0 mh-100"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <SidNav />
          </div>
        </div>

        <footer className="footer">
          <p> كافة الحقوق محفوظة لمصروفي © 2019م </p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.studentReducer.loading,
  students: state.studentReducer.students,
  student: state.studentReducer.student,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  fetchSchool: () => dispatch(actionCreators.fetchSchool()),
  checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
  fetchItems: () => dispatch(actionCreators.fetchItems()),
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
