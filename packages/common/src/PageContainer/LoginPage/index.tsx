'use client';

import { useEffect } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';

import { BottomIcon, TopIcon, LoginLogoIcon } from 'common/assets';
import { LoginButton } from 'common/components';

import { usePostLoginCode } from 'api/common';

import * as S from './style';

const LoginPage = () => {
  const { get } = useSearchParams();
  const { push } = useRouter();
  const { mutate, isSuccess } = usePostLoginCode();

  const handleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?ei5r49r2ou9pflsn9bas5hvj4c13uroq.apps.googleusercontent.com&response_type=code&redirect_uri=${window.location.href}&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;
  };

  useEffect(() => {
    if (get('code')) {
      mutate({ code: get('code') as string });
    }
  }, []);

  if (isSuccess){
    push('/');
  } 
  

  return (
    <S.MainWrapper>
      <S.TopImageWrapper>
        <TopIcon />
      </S.TopImageWrapper>
      <S.BottomIconWrapper>
        <BottomIcon />
      </S.BottomIconWrapper>
      <LoginLogoIcon />
      <S.StackKnowledge>Stack Knowledge</S.StackKnowledge>
      <LoginButton disabled={get('code')} onClick={handleLogin} />
    </S.MainWrapper>
  );
};

export default LoginPage;
