import React, { useEffect, useState } from 'react';
import './SignIn.sass';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import PasswordInput from '../../common/PasswordInput/PasswordInput';
import Input from '../../common/Input/Input';
import {
  authentication,
  authenticationGoogle,
} from '../../../store/slices/Authentication/AuthenticationSlices';
import { useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Loader from '../../common/Loader/Loader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISignIn {}

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const re = /\S+@\S+\.\S+/;

// eslint-disable-next-line no-empty-pattern
const SignIn: React.FC<ISignIn> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const success = useSelector((state: RootState) => state.user.success);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  const [email, setEmail] = useState<string>('');
  const [errorEmailMessage, setErrorEmailMessage] = useState<string>('');
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('');

  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleChange = (
    // eslint-disable-next-line no-unused-vars
    setPasswordState: (p: string) => void,
    e: { target: { value: string } },
  ) => {
    setPasswordState(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const showPassword = (setPasswordHideState: (arg0: (prevState: boolean) => boolean) => void) => {
    setPasswordHideState((prevState: boolean) => !prevState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsErrorEmail(false);
    setIsErrorPassword(false);
    setErrorEmailMessage('');
    setErrorPasswordMessage('');

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

    if (password === '') {
      setIsErrorPassword(true);
      setErrorPasswordMessage('Password cannot be empty');
    }
    if (email && password) {
      console.log({
        email: email,
        password: password,
      });
    }
    const data = {
      email: email,
      password: password,
    };

    dispatch(authentication(data));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSignInSuccess = (res: any) => {
    console.log('LOGIN SUCCESS! Current user', res.profileObj);
    const data = {
      email: res.profileObj.email,
      username: res.profileObj.name,
      google_openid_key: res.profileObj.googleId,
      picture: res.profileObj.imageUrl,
    };
    dispatch(authenticationGoogle(data));
  };

  const onFailure = (res: unknown) => {
    console.log('LOGIN FAILED! res', res);
    // setIsGoogleAuthSuccess(false);
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate('/profile');
      }, 2500);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/auth');
      }, 1500);
    }
  }, [error]);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 2, width: '100%', position: 'relative' }}
    >
      {error && !success && (
        <Modal
          open={error !== null ? true : false}
          onClose={() => {
            navigate('/auth');
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
      {loading && (
        <Modal
          open={loading}
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
      {success && (
        <Modal
          open={success}
          onClose={() => {
            navigate('/profile');
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
              You are successfully logged in
            </Typography>
          </Box>
        </Modal>
      )}
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
      />
      <PasswordInput
        isError={isErrorPassword}
        helperText={errorPasswordMessage}
        label="Password"
        value={password}
        setPassword={setPassword}
        hidePassword={hidePassword}
        handleChange={handleChange}
        showPassword={showPassword}
        setHidePassword={setHidePassword}
      />
      {/* TODO: add link for forgot password (add api route) */}
      <div style={{ width: '100%', textAlign: 'right' }}>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, borderRadius: '50px' }}
        // onClick={handleSubmit}
      >
        Sign In
      </Button>
      <div className="hr">
        <div></div>
        <div>Or Sign in with</div>
        <div></div>
      </div>

      <div className="socialContainer">
        {/* <div>
          <ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div> */}
        <Link href="#" className="social">
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID ?? ''}
            render={(renderProps) => <GoogleIcon onClick={renderProps.onClick} />}
            onSuccess={onSignInSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </Link>
        <Link href="#" className="social">
          <AppleIcon />
        </Link>
      </div>
    </Box>
  );
};

export default SignIn;
