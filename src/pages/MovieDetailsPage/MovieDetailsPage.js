import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenreItem from '../../components/GenreItem/GenreItem';

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
        <h3>Genres:</h3>
        <ul>
          {this.props.store.details.genres.map((item, index) => {
            return <GenreItem genre={item} key={index} />;
          })}
        </ul>
        <button onClick={this.handleBackClick}>BACK</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default withRouter(connect(mapStoreToProps)(MovieDetailsPage));
