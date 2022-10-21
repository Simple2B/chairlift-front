import React, { useState } from 'react';
import './SignIn.sass';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authenticationGoogle } from '../../../store/slices/Authentication/AuthenticationGoogleSlices';
import { useAppDispatch } from '../../../store';
import PasswordInput from '../../common/PasswordInput/PasswordInput';
import Input from '../../common/Input/Input';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISignIn {}

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const re = /\S+@\S+\.\S+/;

// eslint-disable-next-line no-empty-pattern
const SignIn: React.FC<ISignIn> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

    // const email = data.get('email')?.toString();
    // const password = data.get('password')?.toString();
    // authApi.signin(email ?? '', password ?? '');
  };

  const notify = () =>
    toast('LOGIN SUCCESS!', {
      position: 'top-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSignInSuccess = (res: any) => {
    console.log('LOGIN SUCCESS! Current user', res.profileObj);
    // setIsGoogleAuthSuccess(true);
    // signIn
    const data = {
      email: res.profileObj.email,
      username: res.profileObj.name,
      google_openid_key: res.profileObj.googleId,
      picture: res.profileObj.imageUrl,
    };
    // authApi.googleSignin(data);
    dispatch(authenticationGoogle(data));
    setTimeout(() => {
      navigate('/');
    }, 3500);
    notify();
    // setIsGoogleAuthSuccess(false);
  };

  const onFailure = (res: unknown) => {
    console.log('LOGIN FAILED! res', res);
    // setIsGoogleAuthSuccess(false);
  };

  // const validate = () => {
  //   let temp = {}
  // }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
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
      {/* TODO: add link for forgot password */}
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
        <div>
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
        </div>
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
