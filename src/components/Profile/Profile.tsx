import * as React from 'react';
import './Profile.sass';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Error from '../common/Error/Error';
import TopBar from './global/TopBar';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProfile {}

// eslint-disable-next-line no-empty-pattern
const Profile: React.FC<IProfile> = ({}) => {
  // const user = useSelector((state: RootState) => state.user.userInfo);
  const success = useSelector((state: RootState) => state.user.success);
  return (
    <>
      {success ? (
        <main className="content">
          <TopBar />
        </main>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Profile;
