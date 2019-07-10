import React from "react";
import { connect } from "react-redux";
import Login from "../Authintication/index"
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

//Move all in-line styling to a .css style sheet, then apply the styling rules here
class index extends React.Component {
  async componentDidMount(){
    await this.props.checkForExpiredToken();
    await this.props.fetchSchool();
      this.props.fetchStudentsList();
      this.props.fetchItems();
      this.props.fetchCategories();
  }
  componentDidUpdate(){

  }
  render() {
    let { profile, loading } = this.props.school;
    let { user } = this.props.auth;
    if (user) {
      if (loading) {
        return <div />;
      } else {
        return (
          <div className="container">
            <div className="row mt-4 justify-content-md-center">
              <div
                className="animated fadeIn card-light border border-info"
                style={{ width: "18rem" }}
              >
                <img
                  src="https://png.pngtree.com/svg/20161216/9a50a5c88b.svg"
                  style={{ width: "100%" }}
                  alt=" الطلاب"
                  className="card-img-top"
                />
                <div className="card-body text-right">
                  <h5
                    className="card-title mr-2 font-weight-bold"
                    style={{ fontSize: "40px" }}
                  >
                    {" "}
                    الطلاب{" "}
                    <span className="badge badge-secondary float-left">
                      {" "}
                      {profile.students.length}{" "}
                    </span>{" "}
                  </h5>
                  {/* <p className="card-text mr-2 font-weight-bold" style={{fontSize:"40px"}}>{profile.students.length}</p> */}
                </div>
              </div>
              <div
                className="animated fadeIn card-light border border-info ml-2"
                style={{ width: "18rem" }}
              >
                <img
                  src="https://static.thenounproject.com/png/1108706-200.png"
                  style={{ width: "100%" }}
                  alt=" المنتجات"
                  className="card-img-top p-2"
                />
                <div className="card-body text-right">
                  <h5
                    className="card-title mr-2 font-weight-bold"
                    style={{ fontSize: "40px" }}
                  >
                    {" "}
                    المنتجات{" "}
                    <span className="badge badge-secondary float-left">
                      {profile.items.length}
                    </span>
                  </h5>
                  {/* <p className="card-text mr-2 font-weight-bold" style={{fontSize:"40px"}}>{profile.students.length}</p> */}
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
      <div className="container">
      <div className="row mt-4 justify-content-md-center">
        <div className="col-12 text-center">
        <h1>
        GoodBye
        </h1>
        </div>
        <div>
        <Link
            to="/Login"
            className="btn btn-light"
            style={{ backgroundColor: "rgb(27, 109, 150)" }}
          >
            <i
              className="fas fa-sign-out-alt"
              style={{ color: "rgb(245, 246, 241)" }}
            >
              {" "}
              تسجيل دخول
            </i>
          </Link>
        </div>

      </div>
      </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  school: state.school
});

const mapDispatchToProps = dispatch => ({
  fetchSchool: () => dispatch(actionCreators.fetchSchool()),
  checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
  fetchItems: () => dispatch(actionCreators.fetchItems()),
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
