import { IRequestGoogleUser, IResponseUserData } from '../types/user';
import { authInstance, instance } from './_axiosInstance';

const formatRequestBody = (email: string, password: string) => {
  const formData = new FormData();
  formData.append('grant_type', '');
  formData.append('username', email);
  formData.append('password', password);
  formData.append('scope', '');
  formData.append('client_id', '');
  formData.append('client_secret', '');
  return formData;
};

export const authApi = {
  signin: async (email: string, password: string): Promise<IResponseUserData> => {
    try {
      const response = await authInstance.post('/login', formatRequestBody(email, password));
      console.log('POST [/sign_in] response received successfully');
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(`POST [/sign_in] error message: ${error.message}`);
      throw error;
    }
  },

  // google_login
  googleSignin: async (user_data: IRequestGoogleUser): Promise<IResponseUserData> => {
    try {
      const response = await instance().post('/google_login', user_data);
      console.log('POST googleSignin successfully', response.data);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(`POST googleSignin => error message: ${error.message}`);
      throw error;
    }
  },
};
