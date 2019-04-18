import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Parents from "./components/Parents";
import Login from "./components/Authintication";
import Navbar from "./components/Navbar";
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";
import Items from "./components/Items";
import AddItem from "./components/Items/AddItem";
import UpdateItem from "./components/Items/UpdateItem";
import ItemDetail from "./components/Items/ItemDetail";

class App extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken();
    this.props.fetchItems();
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/Parents" component={Parents} />
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
    fetchItems: () => dispatch(actionCreators.fetchItems()),
    fetchCategories: () => dispatch(actionCreators.fetchCategories())
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
