import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../../Authintication"
import * as actionCreators from "../../../store/actions/index";
import CategoryOption from "./CategoryOption";
import Card from "../../Card/Card";
import "./styles.css";
import { Link } from "react-router-dom";

class index extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    stock: "",
    image: "",
    category: "",
    image_file: "",
    alertUpload: false
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  submitItem = event => {
    event.preventDefault();
    this.props.addItem(this.state, this.props.history);
  };

  onInputChange = event => {
    if (event.target.name === "category") {
      console.log("event.target.value ===> ", event.target.value);
    }
    this.setState({ [event.target.name]: event.target.value });
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
            <Row className="row mt-">
              <Col md={12}>
                <Card
                  title="إضافة منتج جديد"
                  additem
                  content={
                    <Row>
                      <div className="wrapper wrapper--w680 my-3">
                        <div className="card card-4">
                          <div className="card-body">
                            <form onSubmit={this.submitItem}>
                              <label className="label">اسم المنتج</label>
  
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onInputChange}
                              />
  
                              <label className="label">سعر المنتج</label>
  
                              <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={this.state.price}
                                onChange={this.onInputChange}
                              />
                              <label className="label">الكمية المتوفرة</label>
  
                              <input
                                type="number"
                                className="form-control"
                                name="stock"
                                value={this.state.stock}
                                onChange={this.onInputChange}
                              />
  
                              <label
                                htmlFor="exampleFormControlSelect1"
                                className="label"
                              >
                                صنف المنتج
                              </label>
                              <select
                                className="form-control"
                                onChange={this.onInputChange}
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
                                onChange={this.onInputChange}
                              />
  
                              <label className="label">صورة المنتج</label>
  
                              <input
                                type="file"
                                className="form-control"
                                name="image"
                                onChange={this.onImageChange}
                                id="inputFileToLoad"
                              />
  
                              <button className="btn" type="submit">
                                إضافة
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
  categories: state.items.categories,
  auth:state.auth
});
const mapDispatchToProps = dispatch => ({
  addItem: (item, history) => dispatch(actionCreators.addItem(item, history)),
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
