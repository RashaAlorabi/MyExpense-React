import React from 'react';
import { connect } from 'react-redux';

class index extends React.Component {

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">المقصف</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">الطلاب</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">أولياء الأمور</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">الصفحة الرئيسية</a>
                </li>
              </ul>
             
            </div>
            <a className="navbar-brand" href="#">مصروفي</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        </nav> 
        );
    }
}

export default index;
