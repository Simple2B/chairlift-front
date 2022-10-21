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
import PasswordInput from '../../common/PasswordInput/PasswordInput';
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
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('');

  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isErrorPasswordConfirm, setIsErrorPasswordConfirm] = useState<boolean>(false);
  const [errorPasswordConfirmMessage, setErrorPasswordConfirmMessage] = useState<string>('');

  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState<boolean>(true);

  // TODO: second variant of message error
  // const [error, setError] = useState<string | null>(null);
  // const [errorOpen, setErrorOpen] = useState<boolean>(false);

  // const errorClose = () => {
  //   setErrorOpen(false);
  // };

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

  const submitRegistration = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsErrorPassword(false);
    setErrorPasswordMessage('');
    setIsErrorPasswordConfirm(false);
    setErrorPasswordConfirmMessage('');
    if (password === '') {
      setIsErrorPassword(true);
      setErrorPasswordMessage('Password cannot be empty');
    }
    if (passwordConfirm === '') {
      setIsErrorPasswordConfirm(true);
      setErrorPasswordConfirmMessage('Password cannot be empty');
    }
    if (password !== passwordConfirm) {
      setIsErrorPasswordConfirm(true);
      setErrorPasswordConfirmMessage("Passwords don't match");
    }
    if (password === passwordConfirm) {
      const newUserCredentials = {
        password,
        passwordConfirm,
      };
      console.log('newUserCredentials', newUserCredentials);
      // TODO: verify success response from backend
    }
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
            <PasswordInput
              label="Password"
              value={password}
              setPassword={setPassword}
              hidePassword={hidePassword}
              handleChange={handleChange}
              showPassword={showPassword}
              setHidePassword={setHidePassword}
              isError={isErrorPassword}
              helperText={errorPasswordMessage}
            />
            <PasswordInput
              label="Password confirm"
              value={passwordConfirm}
              setPassword={setPasswordConfirm}
              hidePassword={hidePasswordConfirm}
              handleChange={handleChange}
              showPassword={showPassword}
              setHidePassword={setHidePasswordConfirm}
              isError={isErrorPasswordConfirm}
              helperText={errorPasswordConfirmMessage}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '50px' }}
              onClick={submitRegistration}
            >
              Submit
            </Button>
            {/* TODO: second variant of message error */}
            {/* {error ? (
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
            ) : null} */}
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
