import { useMutation } from '@tanstack/react-query';

import { refreshQueryKeys, authUrl, patch } from 'api/common';

export const usePatchAccessToken = () =>
  useMutation(refreshQueryKeys.patchAccessToken(), () =>
    patch(authUrl.refresh(), {
      headers: {
        RefreshToken: `Bearer ${localStorage.getItem('refresh_token')}`,
      },
    })
  );
