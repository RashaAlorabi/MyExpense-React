import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import ItemCard from "./ItemCard";
import Card from "../../components/Card/Card";

class index extends Component {
  state = {
    category: null
  };

  render() {
    const { loading, items } = this.props.items;
    let ItemCard_obj = [];
    if (loading) {
      ItemCard_obj = items.items.map(item => (
        <ItemCard key={items.id} item={item} />
      ));
    }
    return (
      <div className="content">
        <Container fluid>
          <Row className="row mt-">
            <Col md={12}>
              <Card
                title="منتجات المقصف"
                itemlist
                content={<Row>{ItemCard_obj}</Row>}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.items.loading
});

export default connect(mapStateToProps)(index);
