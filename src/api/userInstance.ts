import { instance } from './_axiosInstance';

export const clientApi = {
  signup: async (): Promise<any> => {
    try {
      const response = await instance().post('/sign_up');
      console.log('POST [/sign_up] successfully');
      return response.data;
    } catch (error: any) {
      console.log(`POST [/sign_up] error message: ${error.message}`);
      throw error;
    }
  },
};
