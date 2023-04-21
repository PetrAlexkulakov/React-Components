import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider } from './contexts/modalContext';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import About from './pages/About';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <ModalProvider>
//       <Provider store={setupStore()}>
//         <App />
//       </Provider>
//     </ModalProvider>
//   </React.StrictMode>
// );

const root = document.getElementById('root') as HTMLElement;
ReactDOM.hydrateRoot(
  root,
  <React.StrictMode>
    <ModalProvider>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);

// const root = document.getElementById('root') as HTMLElement;
// ReactDOM.hydrateRoot(
//   root,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const root = document.getElementById('root') as HTMLElement;
// ReactDOM.hydrateRoot(
//   root,
//   <React.StrictMode>
//     <About />
//   </React.StrictMode>
// );
