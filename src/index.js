import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//  把Card當成是Cardlist的子component後，就不需要import，同理，Cardlist也被放入App作為他的子component
// import Card from './Card.js'
// import Cardlist from './Cardlist.js'

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

//  用 { } 代表要去destructure 資料，這是ES6的語法
//  因為Cardlist變成App的子component，使得Cardlist的props也要改成import進去App，而不需要import到index.js
// import {players} from './players.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
