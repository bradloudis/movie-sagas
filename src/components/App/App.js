import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//
// Page Views
// --------------
import HomePage from '../../pages/HomePage/HomePage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import AddMoviePage from '../../pages/AddMoviePage/AddMoviePage';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:id" component={MovieDetailsPage} />
          <Route path="/addmovie" component={AddMoviePage} />
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(App);
