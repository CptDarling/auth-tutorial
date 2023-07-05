import { render, screen } from '@testing-library/react';
import Preferences from './Preferences';

test('Renders Preferences heading', () => {
  render(<Preferences />);
  const heading = screen.getByText(/Preferences/i);
  expect(heading).toBeInTheDocument();
});
