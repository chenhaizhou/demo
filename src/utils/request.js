import Axios from 'axios';
import { getLocalStorage, getSessionStorage } from './storage';

const accessTokenSaveName = 'access_token';

export const getAccessToken = () => {
  const tokenInLocalStorage = getLocalStorage(accessTokenSaveName);
  const tokenInSessionStorage = getSessionStorage(accessTokenSaveName);
  const finalToken = tokenInLocalStorage || tokenInSessionStorage;
  return finalToken || '';
};

export const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  if (getAccessToken()) {
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.data.code === 302) {
      window.location.href = res.data.redirectUrl || '/';
    }
    if (res.data.code === 401) {
      localStorage.setItem('userStatus', 'logout');
      window.location.href = '/login';
      return null;
    }
    return res.data;
  },
  (err) => {
    console.error('XXXX', err);
    if (err.response.status === 401) {
      window.location.href = '/login';
      return null;
    }
    throw err;
  }
);

const request = {
  get: async(path, params) =>
    await axiosInstance.get(path, { params }),
  post: async(path, data) =>
    await axiosInstance.post(path, data),
  put: async(path, data) =>
    await axiosInstance.put(path, data),
  patch: async(path, data) =>
    await axiosInstance.patch(path, data),
  delete: async(path, params) =>
    await axiosInstance.delete(path, { params }),
};

export { request };
