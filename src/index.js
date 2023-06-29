import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.js'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

//  用 { } 代表要去destructure 資料，這是ES6的語法
import {players} from './players.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Card backnumber = {players[0].backnumber} name = {players[0].name} team = {players[0].team} position = {players[0].position} />
    <Card backnumber = {players[1].backnumber} name = {players[1].name} team = {players[1].team} position = {players[1].position} />
    <Card backnumber = {players[2].backnumber} name = {players[2].name} team = {players[2].team} position = {players[2].position} />
    <Card backnumber = {players[3].backnumber} name = {players[3].name} team = {players[3].team} position = {players[3].position} />
    <Card backnumber = {players[4].backnumber} name = {players[4].name} team = {players[4].team} position = {players[4].position} />
    <Card backnumber = {players[5].backnumber} name = {players[5].name} team = {players[5].team} position = {players[5].position} />
    <Card backnumber = {players[6].backnumber} name = {players[6].name} team = {players[6].team} position = {players[6].position} />
    <Card backnumber = {players[7].backnumber} name = {players[7].name} team = {players[7].team} position = {players[7].position} />
    <Card backnumber = {players[8].backnumber} name = {players[8].name} team = {players[8].team} position = {players[8].position} />
    <Card backnumber = {players[9].backnumber} name = {players[9].name} team = {players[9].team} position = {players[9].position} />
    <Card backnumber = {players[10].backnumber} name = {players[10].name} team = {players[10].team} position = {players[10].position} />
    <Card backnumber = {players[11].backnumber} name = {players[11].name} team = {players[11].team} position = {players[11].position} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
