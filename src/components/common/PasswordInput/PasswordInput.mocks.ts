import { SetStateAction, Dispatch } from 'react';
import { IPasswordInput } from './PasswordInput';

const base: IPasswordInput = {
  label: 'Password',
  value: '',
  setPassword: function (value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  hidePassword: false,
  handleChange: function (
    setPassword: Dispatch<SetStateAction<string>>,
    e: { target: { value: string } },
  ): void {
    throw new Error('Function not implemented.');
  },
  showPassword: function (setHidePassword: Dispatch<SetStateAction<boolean>>): void {
    throw new Error('Function not implemented.');
  },
  setHidePassword: function (value: SetStateAction<boolean>): void {
    throw new Error('Function not implemented.');
  },
  isError: false,
  helperText: '',
};

export const mockPasswordInputProps = {
  base,
};
