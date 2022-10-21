import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../../api/authApi';
import { IInitialState, IRequestGoogleUser } from '../../../types/user';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState: IInitialState = {
  loading: false,
  userInfo: {
    email: '',
    username: '',
    google_openid_key: '',
    picture: '',
  },
  userToken,
  error: null,
  success: false,
};

export const authenticationGoogle = createAsyncThunk(
  'auth/login',
  async (user_data: IRequestGoogleUser) => {
    const res = await authApi.googleSignin(user_data);
    localStorage.setItem('userToken', res.access_token);
    return { user: user_data, token: res.access_token };
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('userToken');
  return null;
});

export const authGoogleSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: { reset: () => initialState },
  extraReducers: {
    // register user
    [authenticationGoogle.pending.toString()]: (state: IInitialState) => {
      state.loading = true;
      state.error = null;
    },
    [authenticationGoogle.fulfilled.toString()]: (state: IInitialState, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload.user;
      state.userToken = action.payload.token;
    },
    [authenticationGoogle.rejected.toString()]: (state: IInitialState, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // logout user
    [logout.pending.toString()]: (state: IInitialState) => {
      state.loading = true;
      state.error = null;
      state.userToken = null;
    },
    [logout.fulfilled.toString()]: (state: IInitialState, action) => {
      state.loading = false;
      state.success = false;
      state.userInfo = {
        email: '',
        username: '',
        google_openid_key: '',
        picture: '',
      };
      state.userToken = action.payload;
    },
    [logout.rejected.toString()]: (state: IInitialState, action) => {
      state.loading = false;
      state.userToken = null;
      state.error = action.payload;
    },
  },
});

export default authGoogleSlice.reducer;
