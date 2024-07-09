import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { authUrl } from 'api/common';

import type { TokenResponseLoginType } from 'types';

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const loginCode = searchParams.get('code');

  const cookieStore = cookies();

  try {
    const res = await fetch(
      new URL(`/api${authUrl.auth()}`, process.env.BASE_URL),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: loginCode,
        }),
      }
    );

    if (!res.ok) {
      throw new Error('로그인에 실패했습니다.');
    }

    const tokenData: TokenResponseLoginType = await res.json();

    cookieStore.set('refresh_token', tokenData.refreshToken);
    cookieStore.set('access_token', tokenData.accessToken);

    return NextResponse.redirect(new URL('/', request.url));
  } catch (e) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}
