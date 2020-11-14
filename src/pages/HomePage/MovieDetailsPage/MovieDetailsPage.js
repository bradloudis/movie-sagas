import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'MOVIE_DETAILS',
      payload: this.props.match.params.id,
    });
    console.log(this.props.store.details);
  }

  render() {
    return (
      <div>
        <h1>MOVIES! {this.props.match.params.id}</h1>
        <p>{this.props.store.details.title}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MovieDetailsPage);
