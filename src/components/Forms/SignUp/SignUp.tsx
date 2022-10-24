import React, { useEffect, useState } from 'react';
import './SignUp.sass';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '../../common/Input/Input';
import { clientApi } from '../../../api/userInstance';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Loader from '../../common/Loader/Loader';
import { instance } from '../../../api/_axiosInstance';

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

  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSuccess(false);
    setIsLoad(true);
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
      const getRegistrationMessage = async () => {
        try {
          const response = await instance().post('/sign_up', { email: email, username: name });
          console.log('POST [/sign_up] successfully', response);
          setIsLoad(false);
          setSuccess(true);
          return response.data;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          setIsLoad(false);
          setSuccess(false);
          setError('Email already exists');
          console.log(`POST [/sign_up] error message: ${error.message}`);
        }
      };
      getRegistrationMessage();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/');
      }, 2500);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
        navigate('/auth#sign_in');
      }, 1500);
    }
  }, [error]);

  return (
    <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1, position: 'relative' }}>
      {error && !isSuccess && (
        <Modal
          open={error !== null ? true : false}
          onClose={() => {
            setError(null);
            navigate('/auth#sign_in');
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ margin: '15% auto' }}
        >
          <Box
            sx={{
              width: '75%',
              margin: '0 auto',
              padding: '55px 30px',
              backgroundColor: '#151632',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
              zIndex: '100',
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: '#f8dcdb', textAlign: 'center' }}
            >
              {`${error}`}
            </Typography>
          </Box>
        </Modal>
      )}
      {isLoad && (
        <Modal
          open={isLoad}
          onClose={() => console.log('Load false')}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            margin: '15% auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
              zIndex: '100',
            }}
          >
            <Loader />
          </Box>
        </Modal>
      )}
      {isSuccess && (
        <Modal
          open={isSuccess}
          onClose={() => {
            setSuccess(false);
            navigate('/');
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ margin: '15% auto' }}
        >
          <Box
            sx={{
              width: '75%',
              margin: '0 auto',
              padding: '55px 30px',
              backgroundColor: '#151632',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
              zIndex: '100',
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: '#f8dcdb', textAlign: 'center' }}
            >
              {`Please check your mail ${email}`}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, color: '#f8dcdb', textAlign: 'center' }}
            >
              You should receive a letter within 1 minute
            </Typography>
          </Box>
        </Modal>
      )}
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
