import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../../store/actions";
import { Container, Row, Col } from "react-bootstrap";
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
            <Card
              title="تفاصيل المنتج"
              itemdetail
              content={
                <Row>
                  <div className="photo">
                    <img src={item.image} className="image" />
                  </div>

                  <div className="description">
                    <h4>{item.name}</h4>
                    <h4>{item.price} ريال</h4>
                    <p>{item.description}</p>
                    <Link to={`/item/update/${item.id}`}>
                      <button>تحديث المنتج</button>
                    </Link>
                    <Link to={"/items"}>
                      <button
                        onClick={() =>
                          this.props.deleteItem(item.id, this.props.history)
                        }
                      >
                        حذف المنتج
                      </button>
                    </Link>
                  </div>
                </Row>
              }
            />
          </Row>
        </Container>
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
