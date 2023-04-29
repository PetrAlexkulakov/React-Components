import React from 'react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import About from './pages/About';
import Forms from './pages/Forms';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { ModalProvider } from './contexts/modalContext';
import { StaticRouter } from 'react-router-dom/server';
import Html from './Html';

describe('App', () => {
  test('Renders not found if invalid path', () => {
    const badRoute = '/some/bad/route';
    const html = ReactDOMServer.renderToString(
      <MemoryRouter initialEntries={[badRoute]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(html).toContain('Not Found');
  });
});

describe('About', () => {
  test('Render', () => {
    const html = ReactDOMServer.renderToString(<About />);
    expect(html).toContain('About');
  });
});

describe('Main', () => {
  test('Render', () => {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location="/">
        <Html>
          <ModalProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ModalProvider>
        </Html>
      </StaticRouter>
    );
    expect(html).toContain('Main');
  });
});

describe('Form', () => {
  test('Render', () => {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location="/form">
        <Html>
          <ModalProvider>
            <Provider store={store}>
              <Forms />
            </Provider>
          </ModalProvider>
        </Html>
      </StaticRouter>
    );
    expect(html).toContain('Form');
  });
});
