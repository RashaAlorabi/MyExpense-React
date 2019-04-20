import React, { Component } from "react";
import "./styles.css";

class CategoryOption extends Component {
  render() {
    return (
      <option className="form-control" value={this.props.category.id}>
        {this.props.category.name}
      </option>
    );
  }
}

export default CategoryOption;
