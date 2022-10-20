import React from 'react';
import './SignIn.sass';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISignIn {}

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// eslint-disable-next-line no-empty-pattern
const SignIn: React.FC<ISignIn> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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

  const onFailure = (res: any) => {
    console.log('LOGIN FAILED! res', res);
    // setIsGoogleAuthSuccess(false);
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
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
