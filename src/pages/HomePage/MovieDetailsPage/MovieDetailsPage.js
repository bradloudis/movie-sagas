import React, { Component } from 'react';

class MovieDetailsPage extends Component {
  render() {
    return (
      <div>
        <h1>MOVIES! {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default MovieDetailsPage;
