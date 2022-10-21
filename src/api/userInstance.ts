import { instance } from './_axiosInstance';

export const clientApi = {
  signup: async (email: string, username: string): Promise<void> => {
    try {
      const response = await instance().post('/sign_up', { email, username });
      console.log('POST [/sign_up] successfully');
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(`POST [/sign_up] error message: ${error.message}`);
      throw error;
    }
  },
};
