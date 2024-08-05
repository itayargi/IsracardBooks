import axios, {AxiosError, AxiosResponse} from 'axios';
import {resetAndNavigate} from '../navigation/navigationRef';
import {ScreenName} from '../utils/enums';
import urls from './urls';
import {logDev} from '../utils/utils';

const axiosInstance = axios.create({
  baseURL: urls.baseUrl,
});

axiosInstance.interceptors.request.use(
  config => {
    // config.headers.Authorization = `Bearer ${yourAuthToken}`;
    return config;
  },
  (error: AxiosError) => {
    // Handle request error here
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful response here
    return response;
  },
  (error: AxiosError) => {
    logDev('error axios:', error);
    // Handle response error here
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error(
        'Response error:',
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error setting up request:', error.message);
    }
    resetAndNavigate(ScreenName.ErrorScreen);
    return Promise.reject(error);
  },
);

export default axiosInstance;
