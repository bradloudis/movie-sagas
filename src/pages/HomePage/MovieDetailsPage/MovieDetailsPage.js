import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'MOVIE_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  render() {
    return (
      <div>
        <h1>MOVIES! {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default connect()(MovieDetailsPage);
