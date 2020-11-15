import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreItem extends Component {
  render() {
    return (
      <div>
        <dt>{this.props.genre.name}</dt>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(GenreItem);
