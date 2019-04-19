import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../../store/actions"
class index extends React.Component {
    
  
    render() {
      let { profile , loading } = this.props.school
      let { user } = this.props.auth
      if (user){
        if (loading){
          return (
            <div/>
          )
        } else{
          return (
            <div className="container"> 
              <div className="row mt-4 justify-content-md-center">
                  <div className="card-light border border-warning" style={{width: "18rem"}}>
                    <img src="https://png.pngtree.com/svg/20161216/9a50a5c88b.svg" style={{width:"100%"}} alt=" الطلاب" className="card-img-top"/>
                    <div className="card-body text-right">
                        <h5 className="card-title mr-2 font-weight-bold" style={{fontSize:"40px"}}> الطلاب <span className="badge badge-secondary float-left"> {profile.students.length} </span> </h5> 
                        {/* <p className="card-text mr-2 font-weight-bold" style={{fontSize:"40px"}}>{profile.students.length}</p> */}
                    </div>
                  </div>
                  <div className="card-light border border-warning ml-2" style={{width: "18rem"}}>
                    <img src="https://png.pngtree.com/svg/20161216/9a50a5c88b.svg" style={{width:"100%"}} alt=" البضائع" className="card-img-top"/>
                    <div className="card-body text-right">
                        <h5 className="card-title mr-2 font-weight-bold" style={{fontSize:"40px"}}> البضائع <span className="badge badge-secondary float-left">{profile.items.length}</span></h5>
                        {/* <p className="card-text mr-2 font-weight-bold" style={{fontSize:"40px"}}>{profile.students.length}</p> */}
                    </div>
                  </div>
              </div>
            </div>
          );
        }
      }else{
        return(
          <div/>
        )
      }
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
      school: state.school,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(actionCreators.fetchItems())
  });

export default connect(mapStateToProps, mapDispatchToProps)(index);
