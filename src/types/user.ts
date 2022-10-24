export interface IGoogleUser {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}

export interface IRequestGoogleUser {
  email: string;
  username: string;
  google_openid_key: string;
  picture?: string;
}

export interface IResponseUser {
  username: string;
  email: string;
  picture: string;
  is_deleted: string;
  created_at: string;
  role: string;
}
export interface IInitialState {
  loading: boolean;
  userInfo: IResponseUser;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

export interface IResponseUserData {
  access_token: string;
  token_type: string;
  user: IResponseUser;
}
