import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MyShelvesPage from './MyShelvesPage';
import SearchPage from "./SearchPage";
import './App.css';

class BooksApp extends React.Component {
  state = {
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      let shelves = {};
      shelves.currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
      shelves.wantToRead = books.filter((book) => book.shelf === 'wantToRead');
      shelves.read = books.filter((book) => book.shelf === 'read');

      this.setState({ shelves })
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyShelvesPage {...this.state.shelves} />
        )} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
