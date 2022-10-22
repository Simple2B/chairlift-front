import React, { useState, useEffect } from 'react';
import './App.sass';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Loader from './components/common/Loader/Loader';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Forms from './components/Forms/Forms';
import CreatePassword from './components/Forms/CreatePassword/CreatePassword';
import Profile from './components/Profile/Profile';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApp {}

// eslint-disable-next-line no-empty-pattern
const App: React.FC<IApp> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, colorMode] = useMode();

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setIsLoading(true);
      }, 1500);
    };
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
      {!isLoading && (
        <Grid
          container
          component="main"
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#141b2d',
              width: '100vw',
            }}
          >
            <Loader />
          </Box>
        </Grid>
      )}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Forms />} />
            <Route path="/reset_password/:uuid" element={<CreatePassword />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
