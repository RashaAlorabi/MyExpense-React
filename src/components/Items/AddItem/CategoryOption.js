import React, { Component } from "react";
class CategoryOption extends Component {
  render() {
    return (
      <option value={this.props.category.id}>{this.props.category.name}</option>
    );
  }
}

export default CategoryOption;
