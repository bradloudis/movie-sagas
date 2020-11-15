import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.store.movies.map((item, index) => {
          return <MovieListItem key={index} movie={item} />;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MovieList);
