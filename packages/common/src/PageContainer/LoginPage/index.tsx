'use client';

import * as S from './style';
import { LoginButton } from 'common/components';
import { BottomIcon, TopIcon, LoginLogoIcon } from 'common/assets';

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = `https://gauth.co.kr/login?client_id=e6e8ac7857c94ca7a24db504d33369078ab562d7a29a4c9db353204ae8080be9&redirect_uri=http://localhost:8080/login/oauth/code/gauth'`;
  };

  // `https://gauth.co.kr/login?client_id=${'e6e8ac7857c94ca7a24db504d33369078ab562d7a29a4c9db353204ae8080be9'}&redirect_uri=${'https://port-0-stack-knowledge-server-1xxfe2bllyrfbtt.sel5.cloudtype.app/'}`
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
    </S.MainWrapper>
  );
};

export default LoginPage;
