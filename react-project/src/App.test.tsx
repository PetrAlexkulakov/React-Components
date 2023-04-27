import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import About from './pages/About';
import Forms from './pages/Forms';
import Main from './pages/Main';
import CardsList from './components/CardsList';
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

  it('Search work', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const input = await screen.findByTestId('search-input');
    fireEvent.change(input, {
      target: { value: 'ri' },
    });
    fireEvent.submit(input);

    expect(await screen.findAllByText(/rick/i));
  });

  test('Open Modal', async () => {
    render(
      <ModalProvider>
        <Provider store={store}>
          <CardsList />
        </Provider>
      </ModalProvider>
    );
    const card = await screen.findByTestId('card-item');
    await userEvent.click(card);
    expect(screen.findByText('Gender: Male'));
  });
});

describe('Form', () => {
  test('Render', () => {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location="/form">
        <Html>
          <ModalProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ModalProvider>
        </Html>
      </StaticRouter>
    );
    expect(html).toContain('Form');
  });
  it('Do not create empty card', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    const card = screen.queryByTestId('card');
    const btn = screen.getByTestId('btn-add');
    fireEvent.click(btn);
    expect(card).toBeNull();
  });
});
