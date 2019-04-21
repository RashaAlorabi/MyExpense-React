import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";

import "./style.css";
import Card from "../Card/Card";
import StudentRow from "./StudentRow";
import * as actionCreators from "../../store/actions/index";

class StudentsList extends Component {
  componentDidMount() {
    /*
     * Aziz CR: it would make more sense to fetch students when
     * the application loads instead of fetching every time we
     * mount this component
     */
    this.props.fetchStudentsList();
  }

  render() {
    /*
     * AzizCR: instead of setting studentRow to an empty div
     * why don't you conditionally render the studentRow based on
     * this.props.loading?
     */
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
                    {/* conditional render would go here */}
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

const mapStateToProps = state => ({
  loading: state.studentReducer.loading
});

const mapDispatchToProps = dispatch => ({
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);
