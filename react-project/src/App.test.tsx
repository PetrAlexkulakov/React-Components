import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import About from './pages/About';
import Forms from './pages/Forms';
import Main from './pages/Main';

describe('App', () => {
  it('Render', () => {
    render(<App />);
  });
  it('Renders not found if invalid path', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Not Found');
  });
});

describe('About', () => {
  it('Render', () => {
    render(<About />);
    expect(screen.getByText(/About us/i));
  });
});

describe('Main', () => {
  it('Render', () => {
    render(<Main />);
  });
  it('Search work', () => {
    render(<Main />);
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, {
      target: { value: 'su' },
    });
    expect(screen.getAllByText(/sunt/i));
  });
});

describe('Form', () => {
  it('Render', () => {
    render(<Forms />);
  });
  it('Do not create empty card', () => {
    render(<Forms />);
    const card = screen.queryByTestId('card');
    const btn = screen.getByTestId('btn-add');
    fireEvent.click(btn);
    expect(card).toBeNull();
  });
});
