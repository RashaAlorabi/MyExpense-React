import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
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
    image: null,
    category: "1",
  };

  async componentDidMount() {
    await  this.props.checkForExpiredToken()
    this.props.fetchCategories();
  }
  addItem = async item => {
    item.preventDefault();
    console.log("this.state ===> ", this.state)
    await this.props.addItem(this.state);
  };

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });
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
          <Form>
            <Form.Group>
              <Form.Label>اسم المنتج</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={this.onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>سعر المنتج</Form.Label>
              <Form.Control
                type="number"
                name="price"
                onChange={this.onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>الكمية المتوفرة</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                onChange={this.onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>صنف المنتج</Form.Label>
              <Form.Control as="select">{category}</Form.Control>
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>المدرسة</Form.Label>
              <Form.Control as="select">
                <option>1</option>
              </Form.Control>
            </Form.Group> */}
            <Form.Group>
              <Form.Label>مكونات المنتج</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="description"
                onChange={this.onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>صورة المنتج</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={this.onInputChange}
              />
            </Form.Group>
            <Button onClick={this.addItem}  variant="light" block>
              إضافة
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.items.categories
});
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actionCreators.addItem(item)),
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  checkForExpiredToken: () => dispatch(actionCreatorsCh.checkForExpiredToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
