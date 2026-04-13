import AXIOS from 'axios';
import { Default_URL } from '../constants/config';

export const axios = AXIOS.create({
  baseURL: Default_URL,
});

export const setUpInterceptors = (navigate) => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem('token');
        navigate('/');
      }
      return Promise.reject(error);
    },
  );
};
