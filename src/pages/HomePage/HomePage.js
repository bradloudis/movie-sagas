import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

class HomePage extends Component {
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

export default withRouter(HomePage);
