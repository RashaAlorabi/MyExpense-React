import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../Authintication"
import ItemCard from "./ItemCard";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

class ListItem extends Component {
  state = {
    category: null
  };

  render() {
    const { loading, items } = this.props.items;
    let ItemCard_obj = [];
    if (loading) {
      ItemCard_obj = items.map(item => <ItemCard key={items.id} item={item} />);
    }
    let { user } = this.props.auth
    if (user){
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
    }else{
      return (
        <div className="container">
        <div className="row mt-4 justify-content-md-center">
          <div className="col-12 text-center">
          <h1>
          GoodBye
          </h1>
          </div>
          <div>
          <Link
              to="/Login"
              className="btn btn-light"
              style={{ backgroundColor: "rgb(27, 109, 150)" }}
            >
              <i
                className="fas fa-sign-out-alt"
                style={{ color: "rgb(245, 246, 241)" }}
              >
                {" "}
                تسجيل دخول
              </i>
            </Link>
          </div>
  
        </div>
        </div>
        );
    }
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.items.loading,
  auth: state.auth
});

export default connect(mapStateToProps)(ListItem);
