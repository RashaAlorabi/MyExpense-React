// React
import React, { Component } from "react";
// Reduc
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../../store/actions";

class index extends Component {
  componentDidMount() {
    this.props.fetchItemDetail(this.props.match.params.itemId);
  }
  render() {
    const item = this.props.item;

    return (
      <div>
        <div>
          <div>
            <h5>{item.name}</h5>
            <img className="card-img-top" src={item.image} alt="img" />
            <div className="card-text" style={{ color: "#808080" }}>
              {item.price} ريال
              <h5>{item.description}</h5>
              <footer className="blockquote-footer">
                {item.stock > 0 ? (
                  <div style={{ color: "green" }}>متوفر</div>
                ) : (
                  <div style={{ color: "red" }}>غير متوفر</div>
                )}
              </footer>
            </div>
            <Link to={`/item/update/${item.id}`}>
              <button>
                <i className="fas fa-plus" /> تحديث منتج
              </button>
            </Link>
            <Link to={"/items"}>
              <button
                onClick={() =>
                  this.props.deleteItem(item.id, this.props.history)
                }
              >
                <i className="fas fa-trash-alt" /> حذف المنتج
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.items.item,
    loading: state.items.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItemDetail: itemID => dispatch(actionCreators.fetchItemDetail(itemID)),
  deleteItem: (itemID, history) =>
    dispatch(actionCreators.deleteItem(itemID, history))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
