import { useMutation } from '@tanstack/react-query';

import { post, authQueryKeys, authUrl } from 'api/common';

import { TokenResponseType } from 'types';

export const usePostLoginCode = () =>
  useMutation<TokenResponseType, Error, { code: string }>(
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
