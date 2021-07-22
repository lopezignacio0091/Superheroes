import axios from 'axios';
import {defaultUrl} from '../actions/types';

const axiosInstance = axios.create({
  baseURL: `${defaultUrl}/api.php`,
});
axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  return Promise.reject(error);
});
export default axiosInstance;