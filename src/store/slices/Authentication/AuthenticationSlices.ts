import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../../api/authApi';
import { IInitialState, IRequestGoogleUser, IResponseUserData } from '../../../types/user';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState: IInitialState = {
  loading: false,
  userInfo: { username: '', email: '', picture: '', is_deleted: '', created_at: '', role: '' },
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
  Promise<void | IResponseUserData | any> => {
    try {
      // make request to backend
      const res = await authApi.signin(email, password);

      console.log('authentication: res ', res);
      localStorage.setItem('userToken', res.access_token);

      return { token: res.access_token, token_type: res.token_type, user: res.user };
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

export const authenticationGoogle = createAsyncThunk(
  'auth/login',
  async (user_data: IRequestGoogleUser) => {
    const res = await authApi.googleSignin(user_data);
    localStorage.setItem('userToken', res.access_token);
    return { token: res.access_token, token_type: res.token_type, user: res.user };
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('userToken');
  return null;
});

export const authenticationSlice = createSlice({
  name: 'Authentication',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // register user
    [authentication.pending.toString()]: (state: IInitialState) => {
      state.loading = true;
      state.error = null;
    },
    [authentication.fulfilled.toString()]: (state: IInitialState, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo.username = action.payload.user.username;
      state.userInfo.email = action.payload.user.email;
      state.userInfo.picture = action.payload.user.picture;
      state.userInfo.is_deleted = action.payload.user.is_deleted;
      state.userInfo.created_at = action.payload.user.created_at;
      state.userInfo.role = action.payload.user.role;
      state.userToken = action.payload.token;
    },
    [authentication.rejected.toString()]: (state: IInitialState, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // register user with google
    [authenticationGoogle.pending.toString()]: (state: IInitialState) => {
      state.loading = true;
      state.error = null;
    },
    [authenticationGoogle.fulfilled.toString()]: (state: IInitialState, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo.username = action.payload.user.username;
      state.userInfo.email = action.payload.user.email;
      state.userInfo.picture = action.payload.user.picture;
      state.userInfo.is_deleted = action.payload.user.is_deleted;
      state.userInfo.created_at = action.payload.user.created_at;
      state.userInfo.role = action.payload.user.role;
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
        username: '',
        email: '',
        picture: '',
        is_deleted: '',
        created_at: '',
        role: '',
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

export default authenticationSlice.reducer;
