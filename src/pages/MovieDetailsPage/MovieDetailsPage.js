import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieDetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'MOVIE_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>{this.props.store.details.title}</h2>
        <img
          src={this.props.store.details.poster}
          alt={this.props.store.details.title}
        />
        <p>{this.props.store.details.description}</p>
        <button onClick={this.handleBackClick}>BACK</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default withRouter(connect(mapStoreToProps)(MovieDetailsPage));
