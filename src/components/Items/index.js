import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import Card from "../../components/Card/Card";
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
      // <div className="container">
      //   <div className="row mt-5">
      //     <div className="col-4 ">
      //       <Link to="/add/item">
      //         <button>
      //           <i className="fas fa-plus" /> إضافة منتج جديد
      //         </button>
      //       </Link>
      //     </div>
      //     <div className="col-8">{ItemCard_obj}</div>
      //   </div>
      // </div>
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

// class Icons extends Component {
//   render() {
//     return (
//       <div className="content">
//         <Grid fluid>
//           <Row>
//             <Col md={12}>
//                   <Row>
//                     <Col
//                           lg={2}
//                           md={3}
//                           sm={4}
//                           xs={6}
//                           className="font-icon-list"
//                           key={key}
//                         >
//                          {ItemCard_obj}
//                         </Col>
//                   </Row>
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default Icons;
