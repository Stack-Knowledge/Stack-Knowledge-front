import { useMutation } from '@tanstack/react-query';

import { post, authQueryKeys, authUrl } from 'api/common';

import { TokenResponseType } from 'types';

export const usePostLoginCode = () =>
  useMutation<TokenResponseType, Error, { code: string }>(
    authQueryKeys.postLoginCode(),
    (loginCode) => post(`${process.env.NEXT_PUBLIC_API_URL}auth`, loginCode),
    {
      onSuccess: (data) => {
        localStorage.setItem('refresh_token', data.refreshToken);
        localStorage.setItem('access_token', data.accessToken);
        console.log(data);
      },
    }
  );
