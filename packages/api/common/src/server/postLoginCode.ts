import { redirect } from 'next/navigation';

import { authUrl } from 'api/common';

/**
 * 로그인 코드를 전송합니다.
 *
 */
export const postLoginCode = async (loginCode: string): Promise<unknown> => {
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

  return;
};
