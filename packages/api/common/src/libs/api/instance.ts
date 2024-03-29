/* eslint-disable no-console */
import axios from 'axios';

import { authUrl, patch } from 'api/common';

import type { TokenResponseLoginType } from 'types';

export const apiInstance = axios.create({
  baseURL: '/api',
});

apiInstance.interceptors.request.use(
  (request) => {
    if (!request.url.includes('/auth'))
      request.headers['Authorization'] = `Bearer ${window.localStorage.getItem(
        'access_token'
      )}`;
    return request;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        const data: TokenResponseLoginType = await patch(
          authUrl.patchToken(),
          {},
          {
            headers: {
              RefreshToken: `Bearer ${localStorage.getItem('refresh_token')}`,
            },
          }
        );
        localStorage.setItem('refresh_token', data.refreshToken);
        localStorage.setItem('access_token', data.accessToken);
        error.config.headers['Authorization'] = `Bearer ${data.accessToken}`;

        return apiInstance(error.config);
      } catch (error) {
        console.error('Error occurred during patch call:', error);
      }
    }

    if (
      error.config.url === authUrl.patchToken() &&
      [403, 404].includes(error.response.status)
    ) {
      location.replace('/auth/login');

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
