import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

class HomePage extends Component {
  render() {
    return <MovieList></MovieList>;
  }
}

export default connect()(HomePage);
