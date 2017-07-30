import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MyShelvesPage from './MyShelvesPage';
import SearchPage from "./SearchPage";
import './App.css';

class BooksApp extends React.Component {
  state = {
    shelves: {
      currentlyReading: [ { authors: 'Harper Lee', title: 'To Kill a Mockingbird' } ],
      wantToRead: [],
      read: []
    }
  };

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
