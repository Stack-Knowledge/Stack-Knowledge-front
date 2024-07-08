import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'common/src/utils';

import { authUrl, authQueryKeys, del } from 'api/common';

export const useDeleteLogout = () =>
  useMutation(authQueryKeys.deleteAuth(), () =>
    del(authUrl.deleteAuth(), {
      headers: {
        RefreshToken: `${getCookie('refresh_token')}`,
        Authorization: `Bearer ${getCookie('access_token')}`,
      },
    })
  );
