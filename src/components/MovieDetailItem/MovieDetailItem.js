import React, { Component } from 'react';

class MovieDetailItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.poster} alt={this.props.movie.title} />
      </div>
    );
  }
}

export default MovieDetailItem;
