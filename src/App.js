import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Parents from "./components/Parents";
import Login from "./components/Authintication";
import Navbar from "./components/Navbar"
import * as actionCreators from "./store/actions/authentication";
import { connect } from 'react-redux';
import Items from "./components/Items";


class App extends Component {
  async componentDidMount(){
    await this.props.checkForExpiredToken()
  }
  render() {
    return (
      <div>
      <Navbar/>
      <Switch>
      <Route path="/Parents" component={Parents} />
      <Route path="/Login" component={Login} />
      <Route path="/items/:category?" component={Items} />
      <Redirect to="/Login" />
      </Switch>

      
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
  };
};
export default withRouter(connect(null,mapDispatchToProps)(App));
