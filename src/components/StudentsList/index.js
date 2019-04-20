import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import StudentRow from "./StudentRow";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Card from "../Card/Card";
import "./style.css";
class StudentsList extends Component {
  componentDidMount() {
    this.props.fetchStudentsList();
  }

  render() {
    let studentRow;
    if (this.props.loading) {
      studentRow = <div />;
    } else {
      studentRow = this.props.students
        .filter(
          student => student.grade === `Grade ${this.props.match.params.Grade}`
        )
        .map(student => <StudentRow key={student.id} student={student} />);
    }

    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                title="قائمة الطلاب"
                studentlist
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th scope="col" className="th">
                          المرحلة الدراسية{" "}
                        </th>
                        <th scope="col" className="th">
                          اسم الطالب
                        </th>
                        <th scope="col" className="th">
                          رقم الطالب
                        </th>
                      </tr>
                    </thead>
                    {studentRow}
                  </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading
    // students: state.studentReducer.students
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);
