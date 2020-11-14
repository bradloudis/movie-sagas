import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDetailItem from '../../../components/MovieDetailItem/MovieDetailItem';

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
        <h1>MOVIES! {this.props.match.params.id}</h1>
        {this.props.store.details.map((movie, index) => {
          return <MovieDetailItem key={index} movie={movie} />;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MovieDetailsPage);
