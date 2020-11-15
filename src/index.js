import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeLatest('GET_MOVIES', getMovies);
  yield takeLatest('MOVIE_DETAILS', getMovieDetails);
  yield takeLatest('POST_MOVIE', postMovie);
  yield takeLatest('GET_GENRES', getGenres);
}

// SAGAS
function* getMovies(action) {
  try {
    const response = yield axios.get('/api/movie');
    console.log(response.data);
    yield put({
      type: 'SET_MOVIES',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getMovieDetails(action) {
  try {
    const movieResponse = yield axios.get(
      `/api/movie/details/${action.payload}`
    );
    // const genreResponse
    const genreResponse = yield axios.get(
      `/api/genre/details/${action.payload}`
    );
    yield console.log(movieResponse.data[0]);
    yield console.log(genreResponse.data);
    // payload is the 0 index of the array to eliminate need for .map on MovieDetailsPage
    yield put({
      type: 'SET_DETAILS',
      payload: { ...movieResponse.data[0], genres: genreResponse.data },
    });
  } catch (err) {
    console.log(err);
  }
}

function* postMovie(action) {
  try {
    yield axios.post('/api/movie', action.payload);
    yield put({
      type: 'GET_MOVIES',
    });
  } catch (err) {
    console.log(err);
  }
}

function* getGenres(action) {
  try {
    const response = yield axios.get('/api/genre');
    console.log(response.data);
    yield put({
      type: 'SET_GENRES',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

const details = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
