import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/index";

import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShoppingCart,
  faHeart,
  faEye,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

/* this is just temp im using li to just display it in a list.*/
import { withRouter } from "react-router-dom";

class StudentRow extends Component {
  render() {
    let student;
    if (this.props.loading) {
      student = <div />;
    } else {
      student = this.props.student;
    }

    return (
      <tbody>
        <tr>
          <th scope="row">1</th>

          <Link to={`/student/${student.id}/`}>
            <td>{student.name}</td>
          </Link>
          <td>{student.grade}</td>
        </tr>
      </tbody>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  null
)(StudentRow);
