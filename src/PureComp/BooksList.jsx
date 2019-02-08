import React, { Component } from 'react';
import BookListElem from './BookListElem';

class BooksList extends Component {
  render() {
    return (
      <ul>{
          this.props.books.map(
            (elem, key) => {
              return (
                <BookListElem 
                  title={elem.title} 
                  author={elem.author} 
                  price={elem.price} 
                  isbn={elem.isbn}
                  key={key}
                />
              ) 
              }
          )
          }
        </ul>
    );
  }
}

export default BooksList;
