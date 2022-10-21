import { IInput } from './Input';

const base: IInput = {
  name: '',
  label: '',
  value: '',
  onChange: function (): void {
    throw new Error('Function not implemented.');
  },
  isError: false,
  helperText: '',
};

export const mockCardProps = {
  base,
};
