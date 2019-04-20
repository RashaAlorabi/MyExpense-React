import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "react-background-image";

class index extends Component {
  render() {
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
            الصفحة الرئيسية <i class="fas fa-home" />
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
              أضافة طالب
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
                  to="/students:1"
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
                  to="/students:2"
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
                  to="/students:3"
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
                  to="/students:4"
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
                  to="/students:5"
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
                  to="/students:6"
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
                أضافة منتج
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
  }
}

export default index;

// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// import HeaderLinks from "../Header/HeaderLinks.jsx";

// import imagine from "assets/img/sidebar-4.jpg";
// import logo from "assets/img/reactlogo.png";

// class Sidebar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: window.innerWidth
//     };
//   }
//   activeRoute(routeName) {
//     return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
//   }
//   updateDimensions() {
//     this.setState({ width: window.innerWidth });
//   }
//   componentDidMount() {
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions.bind(this));
//   }
//   render() {
//     const sidebarBackground = {
//       backgroundImage: "url(" + imagine + ")"
//     };
//     return (
//       <div
//         id="sidebar"
//         className="sidebar"
//         data-color="black"
//         data-image={imagine}
//       >
//         <div className="sidebar-background" style={sidebarBackground} />
//         <div className="logo">
//           <a
//             href="https://www.creative-tim.com"
//             className="simple-text logo-mini"
//           >
//             <div className="logo-img">
//               <img src={logo} alt="logo_image" />
//             </div>
//           </a>
//           <a
//             href="https://www.creative-tim.com"
//             className="simple-text logo-normal"
//           >
//             Creative Tim
//           </a>
//         </div>
//         <div className="sidebar-wrapper">
//           <ul className="nav">
//             {this.state.width <= 991 ? <HeaderLinks /> : null}
//             {dashboardRoutes.map((prop, key) => {
//               if (!prop.redirect)
//                 return (
//                   <li
//                     className={
//                       prop.upgrade
//                         ? "active active-pro"
//                         : this.activeRoute(prop.path)
//                     }
//                     key={key}
//                   >
//                     <NavLink
//                       to={prop.path}
//                       className="nav-link"
//                       activeClassName="active"
//                     >
//                       <i className={prop.icon} />
//                       <p>{prop.name}</p>
//                     </NavLink>
//                   </li>
//                 );
//               return null;
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Sidebar;
