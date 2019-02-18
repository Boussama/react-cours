import React, { Component } from "react";

class NewBook extends Component {
  state = {};
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      price: this.state.price,
      description: this.state.description
    };

    this.setState({ books: [...this.state.books, book] });
  };
  handleChange = idx => {
    const selectedBook = this.state.books[idx];

    this.setState({
      idx: idx,
      title: selectedBook.title,
      author: selectedBook.author,
      price: selectedBook.price,
      isbn: selectedBook.isbn,
      description: selectedBook.description
    });
  };

  handleEdit = () => {
    const book = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      price: this.state.price,
      description: this.state.description
    };

    const booksCopy = Array.from(this.state.books);
    // booksCopy[this.state.idx] = book;
    booksCopy.splice(this.state.idx, 1);
    booksCopy.splice(this.state.idx, 0, book);

    this.setState({ books: booksCopy });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="please enter the title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="email"
            name="author"
            placeholder="please enter the author"
            onChange={this.handleInputChange}
            value={this.state.author}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            placeholder="please enter the price"
            onChange={this.handleInputChange}
            value={this.state.price}
          />
        </label>
        <br />
        <label>
          ISBN:
          <input
            type="number"
            name="isbn"
            placeholder="please enter the isbn"
            onChange={this.handleInputChange}
            value={this.state.isbn}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            placeholder="please enter the description"
            name="description"
            onChange={this.handleInputChange}
            value={this.state.description}
          />
        </label>
        <br />
        <input type="submit" />
        <input type="button" value="edit" onClick={this.handleEdit} />
      </form>
    );
  }
}

export default NewBook;
