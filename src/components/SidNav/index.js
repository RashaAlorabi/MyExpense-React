import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

class index extends Component {
  render() {
    let {user} = this.props.auth
    if (user){
      return (
        <div className="mt-2">
          <div className="m-1">
            <Link
              to="/Home"
              className="btn btn-lg btn-light btn-block"
              style={{
                backgroundColor: "rgb(27, 109, 150)",
                color: "rgb(245, 246, 241)"
              }}
            >
              الصفحة الرئيسية <i className="fas fa-home" />
            </Link>
          </div>
          <div className="m-1">
            <a
              href="#homeSubmen"
              data-toggle="collapse"
              aria-expanded="false"
              className="btn btn-lg btn-light btn-block dropdown-toggle"
              style={{
                backgroundColor: "rgb(27, 109, 150)",
                color: "rgb(245, 246, 241)"
              }}
            >
              الطلاب
            </a>
            <ul className="collapse list-unstyled" id="homeSubmen">
              <Link
                to="/add/student"
                className="my-2 btn btn-lg btn-light btn-block"
                style={{
                  backgroundColor: "rgb(251, 251, 251)",
                  color: "rgb(27, 109, 150)"
                }}
              >
                {" "}
                إضافة طالب
              </Link>
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="btn btn-lg btn-light btn-block dropdown-toggle"
                style={{
                  backgroundColor: "rgb(251, 251, 251)",
                  color: "rgb(27, 109, 150)"
                }}
              >
                قائمة الطلاب
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link
                    to="/students1"
                    className="my-2 btn btn-lg btn-light btn-block"
                    style={{
                      backgroundColor: "rgb(251, 251, 251)",
                      color: "rgb(27, 109, 150)"
                    }}
                  >
                    الصف الاول
                  </Link>
                </li>
                <li>
                  <Link
                    to="/students2"
                    className="my-2 btn btn-lg btn-light btn-block"
                    style={{
                      backgroundColor: "rgb(251, 251, 251)",
                      color: "rgb(27, 109, 150)"
                    }}
                  >
                    الصف الثاني
                  </Link>
                </li>
                <li>
                  <Link
                    to="/students3"
                    className="my-2 btn btn-lg btn-light btn-block"
                    style={{
                      backgroundColor: "rgb(251, 251, 251)",
                      color: "rgb(27, 109, 150)"
                    }}
                  >
                    الصف الثالث
                  </Link>
                </li>
  
                <li>
                  <Link
                    to="/students4"
                    className="my-2 btn btn-lg btn-light btn-block"
                    style={{
                      backgroundColor: "rgb(251, 251, 251)",
                      color: "rgb(27, 109, 150)"
                    }}
                  >
                    الصف الرابع
                  </Link>
                </li>
                <li>
                  <Link
                    to="/students5"
                    className="my-2 btn btn-lg btn-light btn-block"
                    style={{
                      backgroundColor: "rgb(251, 251, 251)",
                      color: "rgb(27, 109, 150)"
                    }}
                  >
                    الصف الخامس
                  </Link>
                </li>
                <li>
                  <Link
                    to="/students6"
                    className="my-2 btn btn-lg btn-light btn-block"
                    style={{
                      backgroundColor: "rgb(251, 251, 251)",
                      color: "rgb(27, 109, 150)"
                    }}
                  >
                    الصف السادس
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <div className="m-1">
            <a
              href="#ALMNTGAT"
              data-toggle="collapse"
              aria-expanded="false"
              className="btn btn-lg btn-light btn-block dropdown-toggle"
              style={{
                backgroundColor: "rgb(27, 109, 150)",
                color: "rgb(245, 246, 241)"
              }}
            >
              {" "}
              المنتجات
            </a>
            <ul className="collapse list-unstyled" id="ALMNTGAT">
              <li>
                <Link
                  to="/add/item"
                  className="my-2 btn btn-lg btn-light btn-block"
                  style={{
                    backgroundColor: "rgb(251, 251, 251)",
                    color: "rgb(27, 109, 150)"
                  }}
                >
                  إضافة منتج
                </Link>
              </li>
              <li>
                <Link
                  to="/items"
                  className="my-2 btn btn-lg btn-light btn-block"
                  style={{
                    backgroundColor: "rgb(251, 251, 251)",
                    color: "rgb(27, 109, 150)"
                  }}
                >
                  عرض المنتجات
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }else{
      return <></>
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)(index);
