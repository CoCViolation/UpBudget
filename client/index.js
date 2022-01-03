import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
//why does this break css???
// import './styles.css';

render(
      <App />,
    document.getElementById('app'),
  );

  