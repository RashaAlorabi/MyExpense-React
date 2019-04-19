import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/authentication";


class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  
  changeHandler = e => {
    /* -- set UserName and Password in state --*/
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    /* -- Submet UserName and Password to actions --*/
    e.preventDefault();
    return this.props.login(this.state, this.props.history);
  };
  render() {
        const errors = this.props.errors;
    return (
        <div className="container">
          <br/>
          <div className="text-center col-12">
          {!!errors.length && (
             
            <div >
                {errors.map(error => (
                 <p key={error}>{error}</p>
               ))}
              <button type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            )
          }
              <h1>تسجيل دخول</h1>
            <form onSubmit={this.submitHandler}>
              <div className="form-group text-right">
                <h5 className="ml-2">اسم المستخدم</h5>
                <input 
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeHandler} 
                className="form-control rounded-pill"/>
              </div>
              <div className="form-group text-right">
                <h5 className="ml-2">كلمة المرور</h5>
                <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeHandler}
                className="form-control rounded-pill"/>
              </div>
              <button type="submit" className="btn btn-primary rounded-pill btn-lg">دخول</button>
            </form>
          </div>
        </div>
    );
  }
}
const mapStateToProps = state => {
  return { 
    user: state.auth.user,
    errors: state.errors.errors
 };
};
const mapDispatchToProps = dispatch => {
  return {
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);
