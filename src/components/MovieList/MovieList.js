import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

// MATERIAL-UI
import { Grid } from '@material-ui/core';

class MovieList extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        {this.props.store.movies.map((item, index) => {
          return (
            <Grid item xs={2}>
              <MovieListItem key={index} movie={item} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MovieList);
