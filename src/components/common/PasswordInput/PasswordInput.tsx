import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import * as React from 'react';
import './PasswordInput.sass';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPasswordInput {
  isError: boolean;
  helperText: string;
  label: string;
  value: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  hidePassword: boolean;
  handleChange(
    // eslint-disable-next-line no-unused-vars
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    // eslint-disable-next-line no-unused-vars
    e: { target: { value: string } },
  ): void;
  // eslint-disable-next-line no-unused-vars
  showPassword(setHidePassword: React.Dispatch<React.SetStateAction<boolean>>): void;
  setHidePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line no-empty-pattern
const PasswordInput: React.FC<IPasswordInput> = ({
  isError,
  helperText,
  label,
  value,
  setPassword,
  hidePassword,
  handleChange,
  showPassword,
  setHidePassword,
}) => {
  return (
    <FormControl sx={{ mt: 1.5, width: '100%', position: 'relative' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password" sx={{ width: '100%' }} error={isError}>
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={!hidePassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => handleChange(setPassword, e)}
        required
        error={isError}
        sx={{ width: '100%', paddingRight: '0' }}
        endAdornment={
          <InputAdornment position="end" sx={{ position: 'absolute', right: '15px' }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => showPassword(setHidePassword)}
              edge="end"
            >
              {hidePassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      <div className="errorMessage">{isError && helperText}</div>
    </FormControl>
  );
};

export default PasswordInput;
