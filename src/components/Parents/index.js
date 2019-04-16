import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../../store/actions/parentActions";
import Parent from "./parent"

class Parents extends React.Component {
  componentDidMount(){
        this.props.fetchParents()
  }
    render() {
        let { parents } = this.props.parnts;
        let parentsList = []
        if (parents){
          console.log("parents ==>", parents)
          parentsList = parents.map(parent => (
              <Parent parent={parent} key={parent.id}/>
          ));
        }
        return (
          <div>
              {parentsList}
          </div>  
        );
    }
}


const mapStateToProps = state => {
    return { 
      parnts: state.parnts
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      fetchParents: () => dispatch(actionCreators.fetchParents()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Parents);
