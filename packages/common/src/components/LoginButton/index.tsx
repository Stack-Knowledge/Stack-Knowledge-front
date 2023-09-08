'use client';

import * as S from './style';

import Image from 'next/image';

import GAuthIcon from 'common/assets/Login/GAuthIcon.png';

const LoginButton = ({ ...attributes }) => (
  <S.ButtonWrapper {...attributes}>
    <S.GAuthIconWrapper>
      <Image alt='gauth' fill src={GAuthIcon} />
    </S.GAuthIconWrapper>
    GAuth로 로그인하기
  </S.ButtonWrapper>
);

export default LoginButton;
