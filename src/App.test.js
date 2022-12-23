import { render, screen } from '@testing-library/react';
import App from './App';
import Wall from './component/wall';

test('renders learn react link', () => {
  render(<Wall />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
