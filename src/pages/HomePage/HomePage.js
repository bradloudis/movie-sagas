import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return <pre>{JSON.stringify(this.props.store.movies)}</pre>;
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(HomePage);
