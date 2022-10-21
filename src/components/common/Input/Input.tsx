import * as React from 'react';
import TextField from '@mui/material/TextField';
import './Input.sass';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInput {
  isError: boolean;
  helperText: string;
  name: string;
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange(e: { target: { value: string } }): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;
  type?: string;
}

// eslint-disable-next-line no-empty-pattern
const Input: React.FC<IInput> = ({
  isError,
  helperText,
  name,
  label,
  value,
  onChange,
  sx,
  type,
}) => {
  return (
    <TextField
      error={isError}
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      // className={classes.field}
      required
      fullWidth
      autoFocus
      sx={sx}
      type={type}
    />
  );
};

export default Input;
