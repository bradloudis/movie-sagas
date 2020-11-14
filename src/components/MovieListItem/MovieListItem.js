import React, { Component } from 'react';

class MovieListItem extends Component {
  render() {
    return <h3>{this.props.movie.title}</h3>;
  }
}

export default MovieListItem;
