import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.genre.name}</li>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(GenreItem);
