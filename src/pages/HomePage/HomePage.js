import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  handleAddMovieClick = () => {
    this.props.history.push('/addmovie');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddMovieClick}>ADD MOVIE</button>
        <MovieList />
      </div>
    );
  }
}

export default withRouter(connect()(HomePage));
