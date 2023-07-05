import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Application heading', () => {
  render(<App />);
  const heading = screen.getByText(/Application/i);
  expect(heading).toBeInTheDocument();
});
