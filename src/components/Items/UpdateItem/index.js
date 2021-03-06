import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../../Authintication"
import * as actionCreators from "../../../store/actions";
import CategoryOption from "../AddItem/CategoryOption";
import Card from "../../Card/Card";
import "../styles.css";
import { Link } from "react-router-dom";

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
    let category = this.props.categories;
    if (category) {
      category = this.props.categories.map(category => (
        <CategoryOption key={category.id} category={category} />
      ));
    }
    let { user } = this.props.auth
    if (user){
      return (
        <div className="content animated bounceInDown">
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
                                <option className="form-control" value={"#"}>
                                  أختر الصنف
                                </option>
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
    else{
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
  item: state.items.item,
  categories: state.items.categories,
  auth:state.auth
});

const mapDispatchToProps = dispatch => ({
  updateItem: (item, history) =>
    dispatch(actionCreators.updateItem(item, history)),
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateItem);
