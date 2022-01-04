import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
// import store from './store.js';

// import './styles.css';
//^^^^ this breaks our webpack for some reason,
//need to import via script in index.html

render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('app')
);
