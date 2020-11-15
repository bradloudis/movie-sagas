import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMoviePage extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre: '',
  };

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  handleClickAddMovie = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'POST_MOVIE',
      payload: this.state,
    });
  };

  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>ADD A MOVIE!</h1>
        <form onSubmit={this.handleClickAddMovie}>
          <input
            onChange={this.handleChange('title')}
            required
            type="text"
            placeholder="Movie Title"
          />
          <input
            onChange={this.handleChange('poster')}
            required
            type="text"
            placeholder="Movie Poster URL"
          />
          <input
            onChange={this.handleChange('description')}
            required
            type="text"
            placeholder="Movie Description"
          />
          <button>ADD MOVIE!</button>
        </form>
        <button onClick={this.handleBackClick}>CANCEL</button>
      </div>
    );
  }
}

export default connect()(AddMoviePage);
