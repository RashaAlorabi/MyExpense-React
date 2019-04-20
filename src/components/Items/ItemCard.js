import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import * as actionCreators from "../../store/actions";

class ItemCard extends Component {
  render() {
    const item = this.props.item;

    return (
      <div style={{ marginLeft: "20px" }}>
        <Col lg={2} md={3} sm={4} xs={6}>
          <div
            style={{
              marginBottom: "10px",
              width: "110px",
              height: "200px",

              borderRadius: "10px"
            }}
            onClick={() => this.props.fetchItemDetail(item.id)}
          >
            {/* <div className="card border-light mb-3"> */}
            <Link to={`/item/detail/${item.id}`}>
              <img className="card-img-top" src={item.image} alt="img" />
            </Link>
            <h6
              style={{
                textAlign: "center",
                marginTop: "5px",

                borderRadius: "10px"
              }}
            >
              {item.name}
            </h6>
            {/* </div> */}
          </div>
        </Col>
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

{
  /* <div className="card-text" style={{ color: "#808080" }}>
              {item.price} ريال
              <footer className="blockquote-footer">
                {item.stock > 0 ? (
                  <div style={{ color: "green" }}>متوفر</div>
                ) : (
                  <div style={{ color: "red" }}>غير متوفر</div>
                )}
              </footer>
              <div />
            </div> */
}
