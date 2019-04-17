// React
import React, { Component } from "react";
import "./styles.css";
// Redux
import { connect } from "react-redux";

// Action Functions
import * as actionCreators from "../../store/actions";

class ItemCard extends Component {
  render() {
    const item = this.props.item;
    console.log("TCL: ItemCard -> render -> item", item);

    return (
      <div>
        <div>
          <div>
            <h5>{item.name}</h5>
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
  fetchItems: () => dispatch(actionCreators.fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCard);
