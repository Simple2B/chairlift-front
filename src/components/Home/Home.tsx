import React, { useState, useEffect } from 'react';
import './Home.sass';
import { Link as ReactLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../../img/SL-Logo-New.png';
import bgMountains from '../../img/mountains.webp';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { IGoogleUser } from '../../types/user';
import Avatar from '@mui/material/Avatar';

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="rgba(255, 255, 255, 0.9)" align="center" {...props}>
      {' © '}
      <Link color="inherit" href="https://snodar.io/">
        SNOdar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHome {}

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// eslint-disable-next-line no-empty-pattern
const Home: React.FC<IHome> = () => {
  const [user, setUser] = useState<IGoogleUser | null>(null);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        apiKey: GOOGLE_API_KEY,
      });
    }
    gapi.load('client:auth2', start);
    const authUser = localStorage.getItem('user');
    if (authUser) setUser(JSON.parse(authUser ?? ''));
  }, []);

  // get accessToken
  // const accessToken = gapi.auth.getToken().access_token;
  console.log('user ', user);

  const onLogoutSuccess = () => {
    console.log('LOGOUT success ');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${bgMountains})`,
        opacity: 1,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '100% 0%',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <Box
        component="div"
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 101,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="login"
      >
        {' '}
        {user?.googleId && (
          <Avatar alt={'avatar'} src={user?.imageUrl} sx={{ marginRight: '7px' }} />
        )}
        {user ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID ?? ''}
            render={(renderProps) => (
              <LogoutIcon sx={{ color: 'white' }} onClick={renderProps.onClick} />
            )}
            onLogoutSuccess={onLogoutSuccess}
          />
        ) : (
          <ReactLink to="/signin">
            <LoginIcon sx={{ color: 'white' }} />
          </ReactLink>
        )}
      </Box>
      <Box
        component="div"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: '100',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          flexGrow: 1,
        }}
      >
        {/* TODO: href ? */}
        <Link
          color="inherit"
          href="#"
          sx={{
            m: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <img src={logo} alt={logo} />
        </Link>
        <Typography
          color="black"
          align="center"
          sx={{
            width: '95%',
            m: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '45px',
            fontWeight: '300',
            fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            cursor: 'pointer',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          SNOdar - Remote Snow Depth Sensor with real-time, cloud-enabled tracking!
        </Typography>
        <Typography
          color="black"
          align="center"
          sx={{
            width: '95%',
            m: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
            fontWeight: '900',
            cursor: 'pointer',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          Visit Proto
          {/* TODO: link to main page if auth user */}
          <Link color="inherit" href="/" sx={{ textIndent: '7px' }}>
            Dashboard
          </Link>
        </Typography>
        <Typography
          color="black"
          align="center"
          sx={{
            width: '95%',
            m: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '18px',
            fontWeight: '900',
            cursor: 'pointer',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          More Product Details:
          <Link
            color="inherit"
            href="https://sensorlogicinc.github.io/snodar-releases/"
            sx={{ textIndent: '7px' }}
          >
            SNOdar Releases
          </Link>
        </Typography>
        <Copyright />
      </Box>
    </Grid>
  );
};

export default Home;
