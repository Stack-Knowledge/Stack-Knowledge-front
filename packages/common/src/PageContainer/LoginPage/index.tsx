'use client';

import * as S from './style';
import { LoginButton } from 'common/components';
import { BottomIcon, TopIcon, LoginLogoIcon } from 'common/assets';

const LoginPage = () => {
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
      <LoginButton />
    </S.MainWrapper>
  );
};

export default LoginPage;
