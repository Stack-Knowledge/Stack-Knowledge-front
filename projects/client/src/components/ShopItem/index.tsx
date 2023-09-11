'use client';

import * as S from './style';

import Image from 'next/image';

const Example = () => (
  <div>
    <S.ImageWrapper>
      <S.CheckBox></S.CheckBox>
      <Image />
    </S.ImageWrapper>
  </div>
);

export default Example;
