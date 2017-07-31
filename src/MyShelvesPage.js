import React, { Component } from 'react';
import Bookshelf from "./Bookshelf";
import { Link } from 'react-router-dom';

class MyShelvesPage extends Component {
  render() {
    const books = this.props.books;
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={currentlyReading}
              handleBookMove={this.props.handleBookMove}
            />
            <Bookshelf
              title="Want to Read"
              books={wantToRead}
              handleBookMove={this.props.handleBookMove}
            />
            <Bookshelf
              title="Read"
              books={read}
              handleBookMove={this.props.handleBookMove}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyShelvesPage;
