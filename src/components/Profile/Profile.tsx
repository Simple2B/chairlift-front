import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Profile.sass';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProfile {}

// eslint-disable-next-line no-empty-pattern
const Profile: React.FC<IProfile> = ({}) => {
  const user = useSelector((state: RootState) => state.user.userInfo);
  const success = useSelector((state: RootState) => state.user.success);
  return (
    <div>
      <div>{success && user.username}</div>
    </div>
  );
};

export default Profile;
