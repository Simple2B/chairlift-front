import React, { useState, useEffect } from 'react';
import './App.sass';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Loader from './components/common/Loader/Loader';
import SignIn from './components/SingIn/SignIn';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApp {}

// eslint-disable-next-line no-empty-pattern
const App: React.FC<IApp> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

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
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              width: '100vw',
            }}
          >
            <Loader />
          </Box>
        </Grid>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
