import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { authUrl } from 'api/common';

import type { TokenResponseLoginType } from 'types';

/**
 * 로그인 코드를 전송합니다.
 *
 * @returns 로그인 성공 시 메인 페이지로 리다이렉트합니다.
 */
export const postLoginCode = async (loginCode: string) => {
  const response = await fetch(`/api${authUrl.auth}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: loginCode,
    }),
  });

  if (!response.ok) {
    return redirect('/auth/login');
  }

  const tokenData: TokenResponseLoginType = await response.json();

  cookies().set('refresh_token', tokenData.refreshToken ?? '');
  cookies().set('access_token', tokenData.accessToken ?? '');

  return redirect('/');
};
