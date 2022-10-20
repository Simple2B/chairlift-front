import 'jest';
import Forms from './Forms';
import { render } from '@testing-library/react';

// eslint-disable-next-line no-undef
test('should render', () => {
  render(<Forms />);
  // eslint-disable-next-line no-undef
  // expect(screen.getByRole('div'));
  // expect(screen.getByRole('div')).toHaveTextContent('');
});
