import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders feed page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Feed/i);
  expect(linkElement).toBeInTheDocument();
});
