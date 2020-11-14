import React, { Component } from 'react';

class MovieListItem extends Component {
  handleClick = () => {
    console.log('movie poster click!', this.props.movie.id);
  };

  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          src={this.props.movie.poster}
          alt={this.props.movie.title}
        />
      </div>
    );
  }
}

export default MovieListItem;
