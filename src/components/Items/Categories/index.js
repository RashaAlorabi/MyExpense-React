import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import { Link } from "react-router-dom";

class index extends Component {
  state = {
    category: null
  };
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const categoryRow = this.props.categories.map(category => category.name);
    console.log("TCL: index -> render -> categoryRow", categoryRow);
    return (
      <div>
        <ul>{categoryRow}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.items.categories,
    loading: state.items.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
