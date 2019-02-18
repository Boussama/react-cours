import React, { Component } from "react";
import "./App.css";
import BooksList from "./PureComp/BooksList";
import NewBook from "./PureComp/NewBook";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      books: [],
      idx: "",
      title: "",
      author: "",
      price: "",
      isbn: "",
      description: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    // http://localhost:3000/api/Books
    const response = await axios.get("http://localhost:3000/api/Books");
    if (response.status === 200) {
      const books = [];
      response.data.map(prop => {
        const book = {
          title: prop.title,
          author: prop.author,
          isbn: prop.isbn,
          price: prop.price,
          description: prop.description
        };
        books.push(book);
      });

      this.setState({ books: books });
    } else {
      // handle error
      console.log(response.status);
    }
    /*
    try{

    }catch(e){

    }

    */
  }

  handleClick(idx) {
    const booksCopy = Array.from(this.state.books);
    booksCopy.splice(idx, 1);

    this.setState({ books: booksCopy });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new">New</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/">
              <BooksList
                books={this.state.books}
                handleClick={this.handleClick}
                handleChange={this.handleChange}
              />
            </Route>
            <Route path="/new" component={NewBook} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
