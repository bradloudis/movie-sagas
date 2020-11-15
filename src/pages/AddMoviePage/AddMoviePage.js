import React, { Component } from 'react';

class AddMoviePage extends Component {
  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>ADD A MOVIE!</h1>
        <button onClick={this.handleBackClick}>BACK</button>
      </div>
    );
  }
}

export default AddMoviePage;
