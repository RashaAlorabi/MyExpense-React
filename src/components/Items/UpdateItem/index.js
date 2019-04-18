// React
import React, { Component } from "react";
// Action Functions
import * as actionCreators from "../../../store/actions";
import CategoryOption from "../AddItem/CategoryOption";
import { connect } from "react-redux";
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
      <div
        className="d-md-flex justify-content-center w-100 p-12  "
        style={{ height: "500px" }}
      >
        <form
          className="  align-self-baseline mt-5  "
          style={{ width: "500px" }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>اسم المنتج</label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>سعر المنتج</label>
            <input
              name="price"
              type="number"
              className="form-control"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>الكمية المتوفرة</label>
            <input
              name="stock"
              type="number"
              className="form-control"
              value={this.state.stock}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">صنف المنتج</label>
            <select
              className="form-control"
              onChange={this.handleChange}
              name="category"
              value={this.state.category}
            >
              {category}
            </select>
          </div>
          <div className="form-group">
            <label>مواصفات المنتج</label>
            <input
              name="district"
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
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
