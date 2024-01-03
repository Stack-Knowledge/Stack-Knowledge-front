import { useMutation } from '@tanstack/react-query';
import { authUrl, authQueryKeys, del } from 'api/common';

export const useDeleteLogout = () => {
  return useMutation(authQueryKeys.deleteLogout(), () =>
    del(authUrl.auth(), {
      headers: {
        RefreshToken: `${localStorage.getItem('refresh_token')}`,
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
  );
};
