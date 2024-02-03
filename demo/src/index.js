import React from 'react';
import ReactDOM from 'react-dom/client';
import Spinner from '../../src';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { /* default */ }
    <Spinner />

    { /* custom spinner */ }
    <Spinner spinnerProps={{ height: 100, width: 100, borderThickness: '5px', borderTopThickness: '2px', borderColor: '#FF5722', animationDuration: 2 }} />

  </React.StrictMode>
);