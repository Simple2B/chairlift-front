import 'jest';
import SignUp from './SignUp';
import { render } from '@testing-library/react';

// eslint-disable-next-line no-undef
test('should render', () => {
  render(<SignUp />);
  // eslint-disable-next-line no-undef
  // expect(screen.getByRole('div'));
  // expect(screen.getByRole('div')).toHaveTextContent('');
});
