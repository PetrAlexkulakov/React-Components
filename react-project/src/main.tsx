import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider } from './contexts/modalContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.hydrateRoot(
  root,
  <BrowserRouter>
    <ModalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ModalProvider>
  </BrowserRouter>
);
