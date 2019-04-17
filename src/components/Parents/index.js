import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../../store/actions/parentActions";
import * as actionCreatorsCh from "../../store/actions/authentication";
import Parent from "./parent"

class Parents extends React.Component {
  async componentDidMount(){
    await  this.props.checkForExpiredToken()
      this.props.fetchParents()
  }

  componentDidUpdate(){
    console.log("parnt.js")
  }
    render() {
        let { parents } = this.props.parents;
        let parentsList = []
        if (parents){
          parentsList = parents.map(parent => (
              <Parent parent={parent} key={parent.id}/>
          ));
        }
        return (
          <div className={"container"}>
          <div className={"row mt-5"}>
            <div className={"col-4"}>
            
            </div>
              <div className={"col-8"}>
              <div class="card">
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    {parentsList}
                  </ul>
                </div>
              </div>
              </div>
          </div>
          </div>  
        );
    }
}


const mapStateToProps = state => {
    return { 
      parents: state.parents
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      checkForExpiredToken: () => dispatch(actionCreatorsCh.checkForExpiredToken()),
      fetchParents: () => dispatch(actionCreators.fetchParents()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Parents);
