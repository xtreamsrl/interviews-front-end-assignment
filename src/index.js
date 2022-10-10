import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);