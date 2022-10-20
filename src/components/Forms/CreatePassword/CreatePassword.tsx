import React from 'react';
import './CreatePassword.sass';
import logoBG from '../../../img/logoBG.jpeg';
import { Link as ReactLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreatePassword {}

const theme = createTheme();

// eslint-disable-next-line no-empty-pattern
const CreatePassword: React.FC<ICreatePassword> = ({}) => {
  const matches = useMediaQuery('(min-width:600px)');

  const handleCreatePassword = () => {
    console.log('Create Password');
  };

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
                {/* <Typography
                  sx={{
                    fontSize: '14px',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  New to Altium?
                </Typography> */}
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
              Set Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleCreatePassword} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                autoComplete="password"
                type="password"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="passwordConfirm"
                label="Confirm password"
                name="passwordConfirm"
                autoComplete="password"
                type="password"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: '50px' }}
              >
                Submit
              </Button>
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
            {/* TODO: add all logos */}
            {/* <Typography component="h1" variant="h5">
          Sign In To Your Altium Account
        </Typography> */}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CreatePassword;
