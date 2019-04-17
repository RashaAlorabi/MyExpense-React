import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import ItemCard from "./ItemCard";
class index extends Component {
  state = {
    category: null
  };
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const { loading, items } = this.props.items;
    console.log("TCL: index -> render -> items", items);
    let ItemCard_obj = [];
    if (loading) {
      ItemCard_obj = items.map(item => <ItemCard key={items.id} item={item} />);
    }
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 ">
            <button>
              <i className="fas fa-plus" /> add new item
            </button>
          </div>
          <div className="col-8">{ItemCard_obj}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    loading: state.items.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(actionCreators.fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
