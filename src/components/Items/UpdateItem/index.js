// React
import React, { Component } from "react";
// Action Functions
import * as actionCreators from "../../../store/actions";
import CategoryOption from "../AddItem/CategoryOption";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../Card/Card";
import "../styles.css";
class UpdateItem extends Component {
  state = {
    id: this.props.item.id,
    name: this.props.item.name,
    price: this.props.item.price,
    description: this.props.item.description,
    stock: this.props.item.stock,
    image: this.props.item.image,
    category: this.props.item.category,
    image_file: "",
    alertUpload: false
  };
  componentDidMount() {
    this.props.fetchCategories();
    this.props.item &&
      this.setState({
        name: this.props.item.name,
        price: this.props.item.price,
        description: this.props.item.description,

        stock: this.props.item.stock,
        image: this.props.item.image,
        category: this.props.item.category
      });
  }

  componentDidUpdate(prevState) {
    if (this.state === prevState) {
      this.setState({
        name: this.props.item.name,
        price: this.props.item.price,
        description: this.props.item.description,

        stock: this.props.item.stock,
        image: this.props.item.image,
        category: this.props.item.category
      });
    }
    // this.props.auth.user && this.props.fetchItems();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateItem(this.state, this.props.history);
  };

  onImageChange = () => {
    let filesSelected = document.getElementById("inputFileToLoad").files;
    console.log("image slected", filesSelected);
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      console.log("image slected 34", fileToLoad);
      this.setState({
        image_file: fileToLoad,
        alertUpload: true,
        image: URL.createObjectURL(fileToLoad)
      });
      let fileReader = new FileReader();
      fileReader.readAsDataURL(fileToLoad);
    }
  };
  render() {
    const itemId = this.props.item.id;
    console.log("TCL: UpdateItem -> render -> itemId", itemId);
    let category = this.props.categories;
    if (category) {
      category = this.props.categories.map(category => (
        <CategoryOption key={category.id} category={category} />
      ));
    }
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                title="تحديث المنتج"
                updateitem
                content={
                  <Row>
                    <div className="wrapper wrapper--w680 my-3">
                      <div className="card card-4">
                        <div className="card-body">
                          <form
                            className="  align-self-baseline mt-5  "
                            style={{ width: "500px" }}
                            onSubmit={this.handleSubmit}
                          >
                            <label className="label">اسم المنتج</label>
                            <input
                              name="name"
                              type="text"
                              value={this.state.name}
                              className="form-control"
                              onChange={this.handleChange}
                            />

                            <label className="label">سعر المنتج</label>
                            <input
                              name="price"
                              type="number"
                              className="form-control"
                              value={this.state.price}
                              onChange={this.handleChange}
                            />

                            <label className="label">الكمية المتوفرة</label>
                            <input
                              name="stock"
                              type="number"
                              className="form-control"
                              value={this.state.stock}
                              onChange={this.handleChange}
                            />

                            <label
                              htmlFor="exampleFormControlSelect1"
                              className="label"
                            >
                              صنف المنتج
                            </label>
                            <select
                              className="form-control"
                              onChange={this.handleChange}
                              name="category"
                              value={this.state.category}
                            >
                              {category}
                            </select>

                            <label className="label">مكونات المنتج</label>

                            <textarea
                              type="text"
                              className="form-control"
                              name="description"
                              value={this.state.description}
                              onChange={this.handleChange}
                            />
                            <span className="label">صورة المنتج</span>

                            <input
                              type="file"
                              className="form-control"
                              name="image"
                              onChange={this.onImageChange}
                              id="inputFileToLoad"
                            />

                            <button className="btn" type="submit">
                              تحديث{" "}
                            </button>
                            {/* 
          <Link to="/items">
            <button
              className="btn btn-light "
              style={{ color: "grey", margin: "10px" }}
            >
              رجوع
            </button>
          </Link> */}
                          </form>
                        </div>
                      </div>
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

const mapStateToProps = state => {
  return {
    item: state.items.item,
    categories: state.items.categories
  };
};
const mapDispatchToProps = dispatch => ({
  updateItem: (item, history) =>
    dispatch(actionCreators.updateItem(item, history)),
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateItem);
