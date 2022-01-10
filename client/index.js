import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import configurationReducer from './store.js';

const store = configureStore({
  reducer: {
    config: configurationReducer,
  }
})

render(
  <React.StrictMode>
    <Provider store={store}> 
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
