import { render, screen } from '@testing-library/react';
import Login from './Login';

test('Renders Login heading', () => {
  render(<Login setToken={() => {}} />);
  const heading = screen.getByText(/Please Log In/i);
  expect(heading).toBeInTheDocument();
});
