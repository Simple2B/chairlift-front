import React, { useEffect, useState } from 'react';
import './SignIn.sass';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import logoBG from '../../img/logoBG.jpeg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authApi } from '../../api/authApi';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISignIn {}

const theme = createTheme();

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// eslint-disable-next-line no-empty-pattern
const SignIn: React.FC<ISignIn> = ({}) => {
  const navigate = useNavigate();
  const [isGoogleAuthSuccess, setIsGoogleAuthSuccess] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();
    authApi.signin(email ?? '', password ?? '');
  };

  const matches = useMediaQuery('(min-width:600px)');

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
    console.log('LOGIN SUCCESS! res', res);
    setIsGoogleAuthSuccess(true);
    // signIn
    const data = {
      email: res.profileObj.email,
      username: res.profileObj.name,
      google_openid_key: res.profileObj.googleId,
      picture: res.profileObj.imageUrl,
    };
    authApi.googleSignin(data);
    setTimeout(() => {
      navigate('/');
    }, 3500);
    localStorage.setItem('user', JSON.stringify(res.profileObj));
    notify();
    setIsGoogleAuthSuccess(false);
  };

  const onFailure = (res: any) => {
    console.log('LOGIN FAILED! res', res);
    setIsGoogleAuthSuccess(false);
  };

  // useEffect(() => {
  //   if (isGoogleAuthSuccess) {
  //     setTimeout(() => {
  //       navigate('/');
  //       setIsGoogleAuthSuccess(false);
  //     }, 3500);
  //   }
  // }, [isGoogleAuthSuccess]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              color="transparent"
              classes={{}}
              sx={{
                width: '100%',
                boxShadow: 'none',
                flexDirection: 'space-between',
              }}
            >
              <Toolbar>
                <Typography
                  color="black"
                  sx={{
                    fontSize: '18px',
                    fontWeight: '900',
                    fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                    fontStyle: 'italic',
                    cursor: 'pointer',
                  }}
                >
                  Altium
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
                <Typography
                  sx={{
                    fontSize: '14px',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  New to Altium?
                </Typography>
                <Link
                  sx={{
                    fontSize: '14px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    padding: '7px 25px',
                    marginLeft: '8px',
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    borderRadius: '57px',
                    color: 'black',
                  }}
                >
                  Register an account
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign In To Your Altium Account
            </Typography>
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
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${logoBG})`,
            opacity: 1,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '76% 20%',
          }}
        >
          <Box
            sx={{
              display: matches ? 'block' : 'none',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign In To Your Altium Account
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
