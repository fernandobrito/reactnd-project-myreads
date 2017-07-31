import React, { Component } from 'react';
import BookshelfChanger from "./BookshelfChanger";

class Book extends Component {
  render() {
    const book = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
               style={{ width: 128,
                 height: 193,
                 backgroundImage: `url("${book.imageLinks.thumbnail}")`
               }}
          />
          <BookshelfChanger
            book={book}
            books={this.props.books}
            handleBookMove={this.props.handleBookMove}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(", ") : ''}</div>
      </div>
    )
  }
}

export default Book;
