import axios from 'axios';
import {ClientConfig} from '@configuration';

export const createAxios = () => {
  const {apiEndpoint} = ClientConfig;
  //
  return axios.create({
    baseURL: apiEndpoint,
    timeout: 30000,
    headers: {},
  });
};

const _post = async (url: string, data: any) => {
  try {
    const result = await createAxios().post(url, data);
    //
    return result.data;
  } catch (error: any) {
    if (error.response?.status === 500) {
      console.log('500 - Internal server error.');
    }
    //
    return null;
  }
};

export const httpRequest = {post: _post};
