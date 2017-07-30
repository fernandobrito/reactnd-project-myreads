import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import SearchPage from "./SearchPage";
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={SearchPage} />
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf title="Currently Reading" />
              <Bookshelf title="Want to Read" />
              <Bookshelf title="Read" />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
