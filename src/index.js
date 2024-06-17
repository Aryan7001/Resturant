import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContextProvider from './Component/Storecontext/Storecontext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
