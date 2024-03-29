'use client';

import Image from 'next/image';

import GoogleIcon from 'common/assets/Login/GoogleIcon.png';

import * as S from './style';

const LoginButton = ({ ...attributes }) => (
  <S.Container>
    {/* <S.ButtonWrapper {...attributes}>
      <S.GAuthIconWrapper>
        <Image alt='gauth' fill src={GAuthIcon} />
      </S.GAuthIconWrapper>
      GAuth로 로그인하기
    </S.ButtonWrapper> */}

    <S.ButtonWrapper {...attributes}>
      <S.GAuthIconWrapper>
        <Image alt='google' fill src={GoogleIcon} />
      </S.GAuthIconWrapper>
      Google계정으로 로그인하기
    </S.ButtonWrapper>
  </S.Container>
);

export default LoginButton;
