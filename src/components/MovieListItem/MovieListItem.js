import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MovieListItem extends Component {
  handleClick = () => {
    console.log('movie poster click!', this.props.movie.id);
    this.props.history.push(`/details/${this.props.movie.id}`);
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

export default withRouter(MovieListItem);
