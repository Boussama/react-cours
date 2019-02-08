import React, { Component } from 'react';

class BookListElem extends Component {
  render() {
    return (
        <li>
            {this.props.title} | 
            {this.props.author} | 
            {this.props.price} | 
            {this.props.isbn}
        </li>
    );
  }
}

export default BookListElem;
