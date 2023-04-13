import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider } from './contexts/modalContext';
import { Provider } from 'react-redux';
import { setupStore, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
