import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//  把Card當成是Cardlist的子component後，就不需要import，同理，Cardlist也被放入App作為他的子component
// import Card from './Card.js'
// import Cardlist from './Cardlist.js'

import App from './containers/App.js';
import './containers/App.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
// import { createStore } from 'redux';
import { searchPlayers } from './reducers';

//  用 { } 代表要去destructure 資料，這是ES6的語法
//  因為Cardlist變成App的子component，使得Cardlist的props也要改成import進去App，而不需要import到index.js
// import {players} from './players.js';

const store = createStore(searchPlayers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
    <p className='tc'>Due to copyright issues regarding players, we have adopted to use resources from a <a className='white hover-light-red' href="https://robohash.org/" >cat image generator website</a> as an alternative.</p>
    <h5 className='tc'>Copyright to <a className='white hover-light-red' href="https://github.com/imladris20" >Po-Lien Lin</a></h5>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
