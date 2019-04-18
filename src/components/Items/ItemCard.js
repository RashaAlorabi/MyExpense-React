import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";

class ItemCard extends Component {
  render() {
    const item = this.props.item;

    return (
      <div>
        <div
          className="card mx-3"
          onClick={() => this.props.fetchItemDetail(item.id)}
        >
          <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
            <Link to={`/item/detail/${item.id}`}>
              <h5>{item.name}</h5>
            </Link>

            <img className="card-img-top" src={item.image} alt="img" />
            <div className="card-text" style={{ color: "#808080" }}>
              {item.price} ريال
              <footer className="blockquote-footer">
                {item.stock > 0 ? (
                  <div style={{ color: "green" }}>متوفر</div>
                ) : (
                  <div style={{ color: "red" }}>غير متوفر</div>
                )}
              </footer>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItemDetail: itemID => dispatch(actionCreators.fetchItemDetail(itemID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCard);
