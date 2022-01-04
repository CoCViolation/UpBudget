import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
<<<<<<< HEAD
import { Provider } from 'react-redux';
// import store from './store.js';

// import './styles.css';
//^^^^ this breaks our webpack for some reason,
//need to import via script in index.html

render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
=======
// import { Provider } from 'react-redux';
// import store from './store.js';
import { BrowserRouter } from 'react-router-dom';


render(
  <React.StrictMode>
    {/* <Provider store={store}>  */}
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    {/* </Provider> */}
  </React.StrictMode>,
>>>>>>> 1c942680eee19814dde8bd2dd9ff39846119b245
  document.getElementById('app')
);
