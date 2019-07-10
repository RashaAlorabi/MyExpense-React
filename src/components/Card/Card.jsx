import React, { Component } from "react";
import pic2 from "../../assets/img/pic2.png";

//Move all in-line styling to a .css style sheet, then apply the styling rules here
export class Card extends Component {
  render() {
    return (
      <div
        className={"card" + (this.props.plain ? " card-plain" : "")}
        style={{ marginTop: "10px", backgroundImage: `url(${pic2})` }}
      >
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h2
            className="title"
            style={{
              color: "rgb(27, 109, 150)",
              textAlign: "center",
              marginTop: "5px"
            }}
          >
            {this.props.title}
          </h2>
          <p className="category">{this.props.category}</p>
        </div>
        <div
          className={
            "content" +
            (this.props.itemlist ? " all-icons" : "") +
            (this.props.itemdetail ? " all-icons" : "") +
            (this.props.additem ? " all-icons" : "") +
            (this.props.updateitem ? " all-icons" : "") +
            (this.props.addstudent ? " all-icons" : "") +
            (this.props.updatesudent ? " all-icons" : "") +
            (this.props.studentlist ? " all-icons" : "") +
            (this.props.studentdetail ? " all-icons" : "")
          }
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Card;
