import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import { Link } from 'react-router-dom'

class index extends React.Component {

    componentDidUpdate(){

    }
    render() {
        let { profile , loading } = this.props.school
        let { user } = this.props.auth
        if (user){
            if (loading){
                return (
                    <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                        <div>
                            <h1 className="navbar-brand">{`مصروفي`}</h1>
                        </div>
                    </nav>
                )
            }else{
                
                return (
                    <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                        <div>
                            <span className="btn btn-light" onClick={() => this.props.logout()}>
                                <i className="fas fa-sign-out-alt"> تسجيل خروج</i></span>
                        </div>
                        <div>
                            <h1 className="navbar-brand">{`مصروفي ${profile.name}`}</h1>
                        </div>
                    </nav>
                )
            }
        }else{
            return (
                <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                    <div>
                        <Link to="/Login" className="btn btn-light">
                            <i className="fas fa-sign-out-alt"> تسجيل دخول</i></Link>
                    </div>
                    <div>
                        <h1 className="navbar-brand">{`مصروفي`}</h1>
                    </div>
                </nav>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        school: state.school,
        auth : state.auth,
    };
  };
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(actionCreators.logout())
  });
export default connect(mapStateToProps, mapDispatchToProps)(index);
