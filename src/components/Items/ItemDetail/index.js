import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import * as actionCreators from "../../../store/actions";
import Card from "../../Card/Card";
import "./styles.css";

class index extends Component {
  componentDidMount() {
    this.props.fetchItemDetail(this.props.match.params.itemId);
  }
  render() {
    const item = this.props.item;

    return (
      <div className="content">
        <Container fluid>
          <Row className="row mt-3">
            <Col md={12}>
              <Card
                title="تفاصيل المنتج"
                itemdetail
                content={
                  <Row>
                    <div className="photo">
                      <img src={item.image} className="image" alt="item" />
                    </div>

                    <div className="description">
                      <h4>{item.name}</h4>
                      <h4>{item.price} ريال</h4>
                      <p>{item.description}</p>
                      <Link to={`/item/update/${item.id}`}>
                        <button className="button">
                          <i className="fas fa-pencil-alt" />
                        </button>
                      </Link>
                      <Link to={"/items"}>
                        <button
                          onClick={() =>
                            this.props.deleteItem(item.id, this.props.history)
                          }
                          className="button"
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                      </Link>
                    </div>
                  </Row>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.items.item,
  loading: state.items.loading
});

const mapDispatchToProps = dispatch => ({
  fetchItemDetail: itemID => dispatch(actionCreators.fetchItemDetail(itemID)),
  deleteItem: (itemID, history) =>
    dispatch(actionCreators.deleteItem(itemID, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
