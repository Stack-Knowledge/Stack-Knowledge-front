'use client';

import * as S from './style';
import { LoginButton } from 'common/components';
import { BottomIcon, TopIcon, LoginLogoIcon } from 'common/assets';

import { usePostLoginCode, usePatchAccessToken } from 'api/common';

import { useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

const LoginPage = () => {
  const { get } = useSearchParams();
  const { mutate } = usePostLoginCode();
  const hook = usePatchAccessToken();

  const handleLogin = () => {
    window.location.href = `https://gauth.co.kr/login?client_id=e6e8ac7857c94ca7a24db504d33369078ab562d7a29a4c9db353204ae8080be9&redirect_uri=http://localhost:3000/auth/login/`;
  };

  useEffect(() => {
    if (get('code')) {
      mutate({ code: get('code') as string });
    }
  }, []);

  const onClick = () => {
    hook.mutate();
  };

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
      <LoginButton onClick={handleLogin} />
      <h1 onClick={onClick}>이거 누르면 됨</h1>
    </S.MainWrapper>
  );
};

export default LoginPage;
