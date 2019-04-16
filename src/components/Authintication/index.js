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
        <div>
          <br/>
          <div>
          {!!errors.length && (
             
            <div>
                {errors.map(error => (
                 <p key={error}>{error}</p>
               ))}
              <button type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            )
          }
              <h1>Login</h1>
            <form onSubmit={this.submitHandler}>
              <div className="form-group text-left">
                <h5 className="ml-2">User Name</h5>
                <input 
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeHandler} 
                className="form-control rounded-pill"/>
              </div>
              <div className="form-group text-left">
                <h5 className="ml-2">Password</h5>
                <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeHandler}
                className="form-control rounded-pill"/>
              </div>
              <button type="submit" className="btn btn-primary rounded-pill">Login</button>
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
