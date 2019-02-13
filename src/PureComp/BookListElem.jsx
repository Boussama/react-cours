import React, { Component } from "react";

class BookListElem extends Component {
  render() {
    return (
      <li>
        {this.props.idx} | {this.props.title} |{this.props.author} |
        {this.props.price}$ |{this.props.isbn}|{" "}
        <button
          onClick={() => {
            this.props.handleClick(this.props.idx);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            this.props.handleChange(this.props.idx);
          }}
        >
          (--!--)
        </button>
      </li>
    );
  }
}

export default BookListElem;
