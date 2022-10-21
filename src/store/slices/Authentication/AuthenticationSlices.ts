import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../../api/authApi';
import { IInitialState } from '../../../types/user';

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

// auth with email and password
export const authentication = createAsyncThunk(
  // action type string
  'user/authentication',
  // callback function
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue },
  ): // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Promise<void | any> => {
    try {
      // make request to backend
      const res = await authApi.signin(email ?? '', password ?? '');

      console.log('authentication: res ', res);

      return res.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const AuthenticationSlice = createSlice({
  name: 'Authentication',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // register user
    [authentication.pending.toString()]: (state: IInitialState) => {
      state.loading = true;
      state.error = null;
    },
    [authentication.fulfilled.toString()]: (state: IInitialState, action: any) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    [authentication.rejected.toString()]: (state: IInitialState, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default AuthenticationSlice.reducer;
