import 'jest';
import Home from './Home';
import { render } from '@testing-library/react';

// eslint-disable-next-line no-undef
test('should render', () => {
  render(<Home />);
  // eslint-disable-next-line no-undef
  // expect(screen.getByRole('div'));
  // expect(screen.getByRole('div')).toHaveTextContent('');
});
