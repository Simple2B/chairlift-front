import * as React from 'react';
import './Profile.sass';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Error from '../common/Error/Error';
import TopBar from './global/TopBar';
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import SideBar from './global/SideBar';
import Dashboard from './dashboard';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProfile {}

// eslint-disable-next-line no-empty-pattern
const Profile: React.FC<IProfile> = ({}) => {
  // const user = useSelector((state: RootState) => state.user.userInfo);
  const success = useSelector((state: RootState) => state.user.success);
  const [theme, colorMode] = useMode();

  return (
    <>
      {success ? (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="containerProfile">
              <SideBar />
              <main className="content">
                <TopBar />
                <Dashboard />
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Profile;
