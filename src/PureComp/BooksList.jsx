import React, { Component } from "react";
import BookListElem from "./BookListElem";
import axios from "axios";

class BooksList extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map((elem, key) => {
          return (
            <BookListElem
              title={elem.title}
              author={elem.author}
              price={elem.price}
              isbn={elem.isbn}
              key={key}
              idx={key}
              handleClick={this.props.handleClick}
              handleChange={this.props.handleChange}
            />
          );
        })}
      </ul>
    );
  }
}

export default BooksList;
