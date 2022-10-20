import 'jest';
import Profile from './Profile';
import { render } from '@testing-library/react';

// eslint-disable-next-line no-undef
test('should render', () => {
  render(<Profile />);
  // eslint-disable-next-line no-undef
  // expect(screen.getByRole('div'));
  // expect(screen.getByRole('div')).toHaveTextContent('');
});
// version 2
// import { render, screen } from '@testing-library/react';
// import SignIn from './SignIn';
// import '@testing-library/jest-dom';

// describe('Card', () => {
//   it('renders a heading', () => {
//     render(
//       <SignIn/>
//     );

//     const heading = screen.getByRole('heading', {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });
