import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import userEvent from '@testing-library/user-event';

import About from './pages/About';
import Forms from './pages/Forms';
import Main from './pages/Main';

describe('App', () => {
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

  it('Search work', async () => {
    render(<Main />);
    const input = await screen.findByTestId('search-input');
    fireEvent.change(input, {
      target: { value: 'ri' },
    });
    fireEvent.submit(input);

    expect(await screen.findAllByText(/rick/i));
  });

  it('Open Modal', async () => {
    render(<Main />);
    const card = await screen.findByTestId('card-item');
    await userEvent.click(card);
    expect(screen.findByText('Gender: Male'));
    screen.debug();
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
