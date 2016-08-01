import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './containers/App';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

// import style
require('./assets/styles/app.scss');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);