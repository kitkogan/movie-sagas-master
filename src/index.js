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
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';

//generator function that was triggered by the rootSaga generator
//that watches for 'GET_MOVIES'
//getmovies calls on axios to get the movies
//it waits for the response so it can set state for movies
function* getMovies() {
    try {
       let response = yield Axios.get(`/movies`);
       console.log('in GET movies saga: ', response.data)
       //All actions of 'SET_MOVIES' is sent from here to reducer
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        }) 
    } catch (err) {
       console.log('error in saga getmovies', err) 
    }
}

function* getDetails(action) {
   try {
       let response = yield Axios.get(`/movies/details/${action.payload}`);
       console.log('in saga getDetails', response.data);
       yield put({
           type: 'SET_DETAILS',
           payload: response.data
       })
   } catch (error) {
       console.log('error in saga getdetails', error)
   }
}

function* getGenres(action) {
   try {
        let response = yield Axios.get(`/movies/genres/${action.payload}`);
       yield put({
           type: 'SET_GENRES',
           payload: response.data
       })
   } catch (error) {
       console.log('error in saga getgenres', error);
       
       
   }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_DETAILS', getDetails);
    yield takeEvery('GET_GENRES', getGenres);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store details returned from server
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
