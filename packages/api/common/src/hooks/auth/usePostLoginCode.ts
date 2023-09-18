import { useMutation } from '@tanstack/react-query';

import { post, authQueryKeys, authUrl } from 'api/common';

import { TokenResponseType } from 'types';

export const usePostLoginCode = () =>
  useMutation<TokenResponseType, Error, { code: string }>(
    authQueryKeys.postLoginCode(),
    (loginCode) =>
      post(authUrl.auth(), JSON.stringify(loginCode), {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    {
      onSuccess: (data) => {
        localStorage.setItem('refresh_token', data.refreshToken);
        localStorage.setItem('access_token', data.accessToken);
        console.log(data);
      },
    }
  );
