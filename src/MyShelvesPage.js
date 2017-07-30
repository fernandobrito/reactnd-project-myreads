import React from 'react';
import Bookshelf from "./Bookshelf";
import { Link } from 'react-router-dom';

function MyShelvesPage(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title="Currently Reading" books={props.currentlyReading} />
          <Bookshelf title="Want to Read" books={props.wantToRead} />
          <Bookshelf title="Read" books={props.read} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default MyShelvesPage;
