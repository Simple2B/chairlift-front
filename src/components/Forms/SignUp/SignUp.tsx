import React, { useState } from 'react';
import './SignUp.sass';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '../../common/Input/Input';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISignUp {}

const re = /\S+@\S+\.\S+/;

// eslint-disable-next-line no-empty-pattern
const SignUp: React.FC<ISignUp> = ({}) => {
  const [name, setName] = useState<string>('');
  const [errorNameMessage, setErrorNameMessage] = useState<string>('');
  const [isErrorName, setIsErrorName] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [errorEmailMessage, setErrorEmailMessage] = useState<string>('');
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsErrorEmail(false);
    setIsErrorName(false);
    setErrorEmailMessage('');
    setErrorNameMessage('');
    if (email === '') {
      setIsErrorEmail(true);
      setErrorEmailMessage('Email cannot be empty');
    }

    if (re.test(email.toLowerCase())) {
      setIsErrorEmail(false);
      setErrorEmailMessage('');
    } else {
      setIsErrorEmail(true);
      setErrorEmailMessage('Email is not valid');
    }

    if (name === '') {
      setIsErrorName(true);
      setErrorNameMessage('Name cannot be empty');
    }

    if (email && name) {
      console.log({
        email: email,
        name: name,
      });
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>
      <Input
        helperText={errorNameMessage}
        isError={isErrorName}
        name={'name'}
        label={'User name'}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (e.target.value !== '') {
            setIsErrorName(false);
            setErrorNameMessage('');
          } else {
            setIsErrorName(true);
            setErrorNameMessage('Name cannot be empty');
          }
        }}
        type="text"
      />
      <Input
        helperText={errorEmailMessage}
        isError={isErrorEmail}
        name={'email'}
        label={'Email'}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (e.target.value !== '') {
            setIsErrorEmail(false);
            setErrorEmailMessage('');
          } else {
            setIsErrorEmail(true);
            setErrorEmailMessage('Email cannot be empty');
          }
        }}
        sx={{ mt: 2 }}
        type="email"
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
