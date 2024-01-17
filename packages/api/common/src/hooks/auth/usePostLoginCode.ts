import { useMutation } from '@tanstack/react-query';

import { authQueryKeys, authUrl, post } from 'api/common';

import type { TokenResponseLoginType } from 'types';

export const usePostLoginCode = () =>
  useMutation<TokenResponseLoginType, Error, { code: string }>(
    authQueryKeys.postLoginCode(),
    (loginCode) => post(authUrl.auth(), loginCode),
    {
      onSuccess: (data) => {
        if (data.refreshToken)
          localStorage.setItem('refresh_token', data.refreshToken);
        if (data.accessToken)
          localStorage.setItem('access_token', data.accessToken);
      },
    }
  );
