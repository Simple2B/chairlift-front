import React from 'react';
import './SignUp.sass';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISignUp {}

// eslint-disable-next-line no-empty-pattern
const SignUp: React.FC<ISignUp> = ({}) => {
  const handleSignUp = () => {
    console.log(' === handleSignUp ===');
  };
  return (
    <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="User Name"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, borderRadius: '50px' }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
