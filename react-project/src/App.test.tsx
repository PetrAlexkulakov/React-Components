import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import CardsList from './components/CardsList';
import App from './App';

describe('Navbar', () => {
  it('Render', () => {
    render(<CardsList />);
    expect(
      screen.getByRole('link', {
        level: 3,
      })
    ).toHaveTextContent('About us');
  });
});
// describe('App', () => {
//   it('Render', () => {
//     render(<App />);
//     expect(document.);
//   });
// });
