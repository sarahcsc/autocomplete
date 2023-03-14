import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi! Here you can search for the clothing that you want./i);
  expect(linkElement).toBeInTheDocument();
});
