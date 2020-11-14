import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

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
        <Router>{/* ADD PAGES! */}</Router>
        <pre>{JSON.stringify(this.props.store.movies)}</pre>
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(App);
