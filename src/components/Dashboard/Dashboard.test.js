import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard/Dashboard';

test('Renders Dashboard heading', () => {
  render(<Dashboard />);
  const heading = screen.getByText(/Dashboard/i);
  expect(heading).toBeInTheDocument();
});
