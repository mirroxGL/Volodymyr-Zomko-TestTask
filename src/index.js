import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store.js';
import AppContainer from './AppContainer';
import { createBrowserHistory } from 'history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={createBrowserHistory()}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
