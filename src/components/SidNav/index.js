import React, { Component } from "react";
import { Link } from 'react-router-dom'

class index extends Component {
 
  render() {
    
    return (
      <div className="mt-2">
        
        <div className="m-1">
          <Link to="/Home" className="btn btn-lg btn-light btn-block">الصفحة الرئيسية</Link>
        </div>
        <div className="m-1">
        <a href="#homeSubmen" data-toggle="collapse" aria-expanded="false" className="btn btn-lg btn-light btn-block dropdown-toggle">الطلاب</a>
          <ul className="collapse list-unstyled" id="homeSubmen">
            <Link to="/add/student" className="my-2 btn btn-lg btn-light btn-block"> أضافة طالب</Link>
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="btn btn-lg btn-light btn-block dropdown-toggle">قائمة الطلاب</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link to="/students1" className="my-2 btn btn-lg btn-light btn-block">الصف الاول</Link>
                </li>
                <li>
                  <Link to="/students2" className="my-2 btn btn-lg btn-light btn-block">الصف الثاني</Link>
                </li>
                <li>
                  <Link to="/students3" className="my-2 btn btn-lg btn-light btn-block">الصف الثالث</Link>
                </li>
                <li>
                  <Link to="/students4" className="my-2 btn btn-lg btn-light btn-block">الصف الرابع</Link>
                </li>
                <li>
                  <Link to="/students5" className="my-2 btn btn-lg btn-light btn-block">الصف الخامس</Link>
                </li>
                <li>
                  <Link to="/students6" className="my-2 btn btn-lg btn-light btn-block">الصف السادس</Link>
                </li>
              </ul>
          </ul>
        </div>
        <div className="m-1">
          <a href="#ALMNTGAT" data-toggle="collapse" aria-expanded="false" className="btn btn-lg btn-light btn-block dropdown-toggle"> المنتجات</a>
            <ul className="collapse list-unstyled" id="ALMNTGAT">
              <li>
                <Link to="/add/item" className="my-2 btn btn-lg btn-light btn-block">أضافة منتج</Link>
              </li>
              <li>
                <Link to="/items" className="my-2 btn btn-lg btn-light btn-block">عرض المنتجات</Link>
              </li>
            </ul>
        </div>        
      </div>
    );
  }
}



export default index;
