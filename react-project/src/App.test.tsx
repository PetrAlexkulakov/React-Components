import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import About from './pages/About';
import Forms from './pages/Forms';

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
  });
});

describe('Form', () => {
  it('Render', () => {
    render(<Forms />);
  });
});
