import React from 'react';
import ReactDOM from 'react-dom/client';

import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger} from 'redux-logger';

import App from './containers/App.js';
import './containers/App.css';
import reportWebVitals from './reportWebVitals';
import { searchPlayers, requestPlayers } from './reducers';

import 'tachyons';
import './index.css';

const logger = createLogger();

const rootReducer = combineReducers({searchPlayers, requestPlayers});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <p className='tc'>Due to copyright issues regarding players, we have adopted to use resources from a <a className='white hover-light-red' href="https://robohash.org/" >cat image generator website</a> as an alternative.</p>
      <h5 className='tc'>Copyright to <a className='white hover-light-red' href="https://github.com/imladris20" >Po-Lien Lin</a></h5>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
