import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// MATERIAL-UI
import { Card, CardActionArea, CardContent } from '@material-ui/core';

class MovieListItem extends Component {
  handleClick = () => {
    console.log('movie poster click!', this.props.movie.id);
    this.props.history.push(`/details/${this.props.movie.id}`);
  };

  render() {
    return (
      <Card>
        <CardActionArea>
          <img
            onClick={this.handleClick}
            src={this.props.movie.poster}
            alt={this.props.movie.title}
          />
        </CardActionArea>
      </Card>
    );
  }
}

export default withRouter(MovieListItem);
