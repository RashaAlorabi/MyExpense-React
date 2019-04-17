import React, { Component } from "react";
class CategoryOption extends Component {
  render() {
    return <option>{this.props.category.name}</option>;
  }
}

export default CategoryOption;
