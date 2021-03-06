import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

// MATERIAL-UI
import { Button, Box } from '@material-ui/core';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  handleAddMovieClick = () => {
    this.props.history.push('/addmovie');
  };

  render() {
    return (
      <div>
        <Box m={2}>
          <Button
            onClick={this.handleAddMovieClick}
            variant="contained"
            color="default"
          >
            ADD MOVIE
          </Button>
        </Box>
        <MovieList />
      </div>
    );
  }
}

export default withRouter(connect()(HomePage));
