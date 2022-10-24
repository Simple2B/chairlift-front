import React, { useState, useEffect } from 'react';
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Loader from './components/common/Loader/Loader';
import Home from './components/Home/Home';
import Forms from './components/Forms/Forms';
import CreatePassword from './components/Forms/CreatePassword/CreatePassword';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Profile/dashboard';

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
              backgroundColor: '#141b2d',
              width: '100vw',
            }}
          >
            <Loader />
          </Box>
        </Grid>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Forms />} />
        <Route path="/reset_password/:uuid" element={<CreatePassword />} />

        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/profile" element={<Dashboard />} /> */}
        {/* <Route path="/profile/team" element={<Team />} /> */}
        {/* <Route path="/profile/contacts" element={<Contacts />} /> */}
        {/* <Route path="/profile/invoices" element={<Invoices />} /> */}
        {/* <Route path="/profile/form" element={<Form />} /> */}
        {/* <Route path="/profile/bar" element={<Bar />} /> */}
        {/* <Route path="/profile/pie" element={<Pie />} /> */}
        {/* <Route path="/profile/line" element={<Line />} /> */}
        {/* <Route path="/profile/faq" element={<FAQ />} /> */}
        {/* <Route path="/profile/calendar" element={<Calendar />} /> */}
        {/* <Route path="/profile/geography" element={<Geography />} /> */}
      </Routes>
    </>
  );
};

export default App;
