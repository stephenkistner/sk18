// /app/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import SCSS from './styles/app.scss';

const appData = {
  title: 'Something cool'
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
