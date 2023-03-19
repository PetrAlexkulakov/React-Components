import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import CardsList from './components/CardsList';
import App from './App';
import Main from './pages/Main';

describe('Navbar', () => {
  it('Render', () => {
    render(<Main />);
    expect(
      screen.getByRole('link', {
        level: 3,
      })
    );
  });
});
// describe('App', () => {
//   it('Render', () => {
//     render(<App />);
//     expect(document.);
//   });
// });
