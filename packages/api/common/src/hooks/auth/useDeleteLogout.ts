import { useMutation } from '@tanstack/react-query';

import { authUrl, authQueryKeys, del } from 'api/common';

export const useDeleteLogout = () =>
  useMutation(authQueryKeys.deleteAuth(), () =>
    del(authUrl.deleteAuth(), {
      headers: {
        RefreshToken: `${localStorage.getItem('refresh_token')}`,
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
  );
