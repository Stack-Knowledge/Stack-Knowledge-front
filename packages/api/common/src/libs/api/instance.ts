import axios from 'axios';

import { authUrl, patch, patchAccessToken } from 'api/common';
import { TokenResponseType } from 'types';

export const apiInstance = axios.create({
  baseURL: '/api',
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

apiInstance.interceptors.request.use(
  (request) => {
    request.headers['Authorization'] = `Bearer ${window.localStorage.getItem(
      'access_token'
    )}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

      const { data }: { data: TokenResponseType } = await patch(
        authUrl.auth(),
        {},
        {
          headers: {
            RefreshToken: `Bearer ${window.localStorage.getItem(
              'refresh_token'
            )}`,
          },
        }
      );

      localStorage.setItem('refresh_token', data.refreshToken);
      localStorage.setItem('access_token', data.accessToken);
      error.config.headers['Authorization'] = `Bearer ${data.accessToken}`;

      return apiInstance(error.config);
    }

    return Promise.reject(error);
  }
);
