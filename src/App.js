import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./components/Authintication";
import Navbar from "./components/Navbar"
import * as actionCreatorsaut from "./store/actions/authentication";
import * as actionCreators from "./store/actions"
import { connect } from 'react-redux';
import Items from "./components/Items";
import Home from "./components/Home";
import SidNav from "./components/SidNav";
class App extends Component {
  async componentDidMount(){
    await this.props.checkForExpiredToken()
    await this.props.fetchSchool()
  }
  componentDidUpdate(){
    
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
              <Route path="/items:category?" component={Items} />
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
const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreatorsaut.checkForExpiredToken()),
    fetchSchool: () => dispatch(actionCreators.fetchSchool())
  };
};
export default withRouter(connect(null,mapDispatchToProps)(App));
