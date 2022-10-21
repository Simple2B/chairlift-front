import 'jest';
import PasswordInput from './PasswordInput';
import { render } from '@testing-library/react';
import { SetStateAction, Dispatch } from 'react';

// eslint-disable-next-line no-undef
test('should render', () => {
  render(
    <PasswordInput
      label="Password"
      value={''}
      setPassword={function (value: SetStateAction<string>): void {
        throw new Error('Function not implemented.');
      }}
      hidePassword={false}
      handleChange={function (
        setPassword: Dispatch<SetStateAction<string>>,
        e: { target: { value: string } },
      ): void {
        throw new Error('Function not implemented.');
      }}
      showPassword={function (setHidePassword: Dispatch<SetStateAction<boolean>>): void {
        throw new Error('Function not implemented.');
      }}
      setHidePassword={function (value: SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
      }}
      isError={false}
      helperText={''}
    />,
  );
});
