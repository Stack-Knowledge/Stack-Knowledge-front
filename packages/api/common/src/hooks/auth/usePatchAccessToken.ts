import { useMutation } from '@tanstack/react-query';

import { refreshQueryKeys, authUrl, patch } from 'api/common';

import { tokenResponseType } from 'types';

export const usePatchAccessToken = () =>
  useMutation<tokenResponseType>(
    refreshQueryKeys.patchAccessToken(),
    () =>
      patch(authUrl.refresh(), {
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
