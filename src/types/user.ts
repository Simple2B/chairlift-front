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

export interface IInitialState {
  loading: boolean;
  userInfo: any;
  userToken: string | null;
  error: string | null;
  success: boolean;
}
