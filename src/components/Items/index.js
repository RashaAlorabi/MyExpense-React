import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
class index extends Component {
  state = {
    category: null
  };

  render() {
    const { loading, items } = this.props.items;
    console.log("TCL: index -> render -> items", items);
    let ItemCard_obj = [];
    if (loading) {
      ItemCard_obj = items.items.map(item => (
        <ItemCard key={items.id} item={item} />
      ));
    }
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 ">
            <Link to="/add/item">
              <button>
                <i className="fas fa-plus" /> إضافة منتج جديد
              </button>
            </Link>
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

export default connect(mapStateToProps)(index);
