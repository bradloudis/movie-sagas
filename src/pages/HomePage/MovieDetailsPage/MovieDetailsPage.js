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
        <img
          src={this.props.store.details.poster}
          alt={this.props.store.details.title}
        />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MovieDetailsPage);
