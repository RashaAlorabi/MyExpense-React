import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style.css";

class StudentRow extends Component {
  render() {
    let student, id;
    if (this.props.loading) {
      student = <div />;
    } else {
      student = this.props.student;
      id = student.id;
    }

    return (
      <Link className="btn btn-light btn-block  mt-1 animated slideInUp"  to={`/student/${student.id}/`}>
      <div className="row">
      <div className="col-4">{student.grade}</div>
      <div className="col-4">{student.name}</div> 
      <div className="col-4">{student.id}</div>
      </div>
      </Link>
        // <tr className="text-center">
        //   <th className="th">{student.grade}</th>
        //   <Link to={`/student/${student.id}/`}>
        //     <th className="tn">{student.name}</th>
        //   </Link>
        //   <th scope="row" className="th">
        //     {id}
        //   </th>
        // </tr>
        // style={{backgroundColor:"white", color:"black"}}
    );
  }
}

const mapStateToProps = state => ({
  loading: state.studentReducer.loading
});

export default connect(
  mapStateToProps,
  null
)(StudentRow);
