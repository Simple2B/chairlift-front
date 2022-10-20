import React, { useState } from 'react';
import './Forms.sass';
import { Link as ReactLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import logoBG from '../../img/logoBG.jpeg';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './SignUp/SignUp';
import SignIn from './SingIn/SignIn';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IForms {}

const theme = createTheme();

// eslint-disable-next-line no-empty-pattern
const Forms: React.FC<IForms> = ({}) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const matches = useMediaQuery('(min-width:600px)');

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
                  <ReactLink to="/">Altium</ReactLink>
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
                {isSignUp ? (
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
                    onClick={() => setIsSignUp(false)}
                    href="#sign_in"
                  >
                    Sign In
                  </Link>
                ) : (
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
                    onClick={() => setIsSignUp(true)}
                    href="#sign_up"
                  >
                    Sign Up
                  </Link>
                )}
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
              {isSignUp ? 'Sign Up' : 'Sign In To Your Altium Account'}
            </Typography>
            {isSignUp ? <SignUp /> : <SignIn />}
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

export default Forms;
