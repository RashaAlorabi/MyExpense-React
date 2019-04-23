import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import * as actionCreators from "../../store/actions";
import "./styles.css";

class ItemCard extends Component {
  render() {
    const item = this.props.item;

    return (
      <div  style={{ marginLeft: "20px" }}>
        <Col lg={2} md={3} sm={4} xs={6}>
        <Link style={{textDecoration:"none", }} to={`/item/detail/${item.id}`}>
          <div
            style={{
              marginBottom: "10px",
              width: "110px",
              height: "200px",
              borderRadius: "10px"
            }}
            onClick={() => this.props.fetchItemDetail(item.id)}
          >
            
              <img className="card-img-top" src={item.image} alt="img" />
            
            <h5
              style={{
                textAlign: "center",
                marginTop: "5px",
                borderRadius: "10px",
                fontSize:20,
                color:"black"
              }}
            >
              {item.name}
            </h5>
          </div>
        </Link>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  fetchItemDetail: itemID => dispatch(actionCreators.fetchItemDetail(itemID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCard);
