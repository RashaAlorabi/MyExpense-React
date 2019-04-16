import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class index extends Component {
  componentDidUpdate() {
    this.props.fetchItems();
  }
  render() {
    return <div>{this.props.fetchItems}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(actionCreators.fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
