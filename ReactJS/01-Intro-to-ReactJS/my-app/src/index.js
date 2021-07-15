import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import ActionBox from './ActionBox';
import ButtonHandler from './ButtonHandler';
import Greeting from './Greeting.js';
import ListWithMap from './ListWithMap';

ReactDOM.render(
  <React.StrictMode>
    <ActionBox />,
    <ButtonHandler />,
    <Greeting IsLoggedIn="true" />,
    <ListWithMap />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
