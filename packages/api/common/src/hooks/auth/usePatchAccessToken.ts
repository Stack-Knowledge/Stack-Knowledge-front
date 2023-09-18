import { useMutation } from '@tanstack/react-query';

import { authQueryKeys, authUrl, patch } from 'api/common';

import { TokenResponseType } from 'types';

export const usePatchAccessToken = () =>
  useMutation<TokenResponseType>(
    authQueryKeys.patchAccessToken(),
    () =>
      patch(authUrl.auth(), {
        headers: {
          RefreshToken: `Bearer ${localStorage.getItem('refresh_token')}`,
        },
      }),
    {
      onSuccess: (data) => {
        localStorage.setItem('refresh_token', data.refreshToken);
        localStorage.setItem('access_token', data.accessToken);
      },
    }
  );
