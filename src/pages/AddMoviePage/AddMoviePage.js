import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMoviePage extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre_id: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

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
    this.props.history.push('/');
  };

  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    const genre = this.props.store.genres.map((item, index) => {
      return (
        <option value={item.id} key={index}>
          {item.name}
        </option>
      );
    });

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
          <label htmlFor="genres">Choose a genre</label>
          <select
            onChange={this.handleChange('genre')}
            id="genres"
            name="genres"
          >
            <option></option>
            {genre}
          </select>
          <div>
            <input
              onChange={this.handleChange('description')}
              required
              type="text"
              placeholder="Movie Description"
            />
          </div>
          <div>
            <button onClick={this.handleBackClick}>CANCEL</button>
            <button>ADD MOVIE!</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(AddMoviePage);
