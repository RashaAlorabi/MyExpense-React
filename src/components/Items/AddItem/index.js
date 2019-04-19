import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import CategoryOption from "./CategoryOption";
import * as actionCreatorsCh from "../../../store/actions/authentication";

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
    return (
      <div className="container">
        <div className="mt-5 mb-5">
          <p>إضافة منتج جديد</p>
          <form onSubmit={this.submitItem}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">اسم المنتج</span>
              </div>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">سعر المنتج</span>
              </div>
              <input
                type="number"
                className="form-control"
                name="price"
                value={this.state.price}
                onChange={this.onInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">الكمية المتوفرة</span>
              </div>
              <input
                type="number"
                className="form-control"
                name="stock"
                value={this.state.stock}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">صنف المنتج</label>
              <select
                className="form-control"
                onChange={this.onInputChange}
                name="category"
                value={this.state.category}
              >
                {category}
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">مكونات المنتج</span>
              </div>
              <input
                type="text"
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.onInputChange}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">صورة المنتج</span>
              </div>
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={this.onImageChange}
                id="inputFileToLoad"
              />

            </div>

            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.items.categories
});
const mapDispatchToProps = dispatch => ({
  addItem: (item, history) => dispatch(actionCreators.addItem(item, history)),
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
