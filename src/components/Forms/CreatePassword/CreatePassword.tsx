import React, { useState } from 'react';
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
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import {
  Visibility,
  VisibilityOff,
  Error as ErrorIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import SnackbarContent from '@mui/material/SnackbarContent';
import Snackbar from '@mui/material/Snackbar';
// import { withStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreatePassword {
  classes: {
    error: string;
  };
}

const theme = createTheme();

// eslint-disable-next-line no-empty-pattern
const CreatePassword: React.FC<ICreatePassword> = ({ classes }) => {
  const matches = useMediaQuery('(min-width:600px)');

  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);
  const [errorOpen, setErrorOpen] = useState<boolean>(false);

  const errorClose = () => {
    setErrorOpen(false);
  };

  const handleChange = (
    setPasswordState: (p: string) => void,
    e: { target: { value: string } },
  ) => {
    setPasswordState(e.target.value);
  };

  const showPassword = (setPasswordHideState: (arg0: (prevState: boolean) => boolean) => void) => {
    setPasswordHideState((prevState: boolean) => !prevState);
  };

  const submitRegistration = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      setErrorOpen(true);
      setError("Passwords don't match");
    }
    const newUserCredentials = {
      password,
      passwordConfirm,
    };
    console.log('newUserCredentials', newUserCredentials);
    // TODO: verify success response from backend
    setPassword('');
    setPasswordConfirm('');
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
                  <ReactLink to="/">SensorLogic</ReactLink>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
                {/* TODO: link ? */}
                {/* <Typography
                  sx={{
                    fontSize: '14px',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  New to SensorLogic?
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
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={!hidePassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => handleChange(setPassword, e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => showPassword(setHidePassword)}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {hidePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password confirm</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={!hidePasswordConfirm ? 'text' : 'password'}
                value={passwordConfirm}
                onChange={(e) => handleChange(setPasswordConfirm, e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => showPassword(setHidePasswordConfirm)}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {hidePasswordConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password confirm"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '50px' }}
              onClick={submitRegistration}
            >
              Submit
            </Button>
            {error ? (
              <Snackbar
                // variant="error"
                key={error}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={errorOpen}
                onClose={errorClose}
                autoHideDuration={3000}
              >
                <SnackbarContent
                  className={classes.error}
                  message={
                    <div>
                      <span style={{ marginRight: '8px' }}>
                        <ErrorIcon fontSize="large" color="error" />
                      </span>
                      <span> {error} </span>
                    </div>
                  }
                  action={[
                    <IconButton key="close" aria-label="close" onClick={errorClose}>
                      <CloseIcon color="error" />
                    </IconButton>,
                  ]}
                />
              </Snackbar>
            ) : null}
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
          ></Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CreatePassword;
