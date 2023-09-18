import axios from 'axios';

import { usePatchAccessToken, authUrl } from 'api/common';

export const apiInstance = axios.create({
  baseURL: '/',
  withCredentials: true,
});

let isRefreshing = false;

const waitRefreshEnd = () =>
  new Promise<void>((resolve) => {
    if (isRefreshing === false) {
      resolve();
    } else {
      setTimeout(() => waitRefreshEnd(), 100);
    }
  });

apiInstance.interceptors.response.use(
  (response) => {
    if (response.config.url === authUrl.auth()) {
      isRefreshing = false;
    }

    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    if (error.config.url === authUrl.auth()) {
      isRefreshing = false;

      location.replace('/auth/login');

      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      if (isRefreshing) {
        await waitRefreshEnd();

        return apiInstance(error.config);
      }

      isRefreshing = true;

      await usePatchAccessToken();

      return apiInstance(error.config);
    }

    return Promise.reject(error);
  }
);
