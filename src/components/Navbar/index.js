import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actionCreators from "../../store/actions";

class index extends React.Component {
  componentDidUpdate(){
    
  }
  render() {
    let { profile, } = this.props.school;
    let { user } = this.props.auth;
    return (
      <nav
          className="navbar"
          style={{ backgroundColor: "rgb(27, 109, 150)" }}
        >
          <div>
            { user ? <span
                className="btn btn-light"
                style={{ backgroundColor: "rgb(27, 109, 150)" }}
                onClick={() => this.props.logout()}
              >
                <i
                  className="fas fa-sign-out-alt"
                  style={{ color: "rgb(245, 246, 241)" }}
                >
                  {" "}
                  تسجيل خروج
                </i>
              </span> 
            : 
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
            }
              
          </div>
          <div>
            <h1 className="navbar-brand" style={{color:"white"}}>{user ? `مصروفي ${profile && profile.name}`: "مصروفي"}</h1>
          </div>
      </nav> 
    );
  }
}

const mapStateToProps = state => ({
  school: state.school,
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);

