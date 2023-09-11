'use client';

import * as S from './style';

import { slicePoint } from 'common';

const ShopPage = () => (
  <S.PageWrapper>
    <S.MiledgeTitle>현재 마일리지</S.MiledgeTitle>
    <S.FlexWrapper>
      <S.MilidgePoint>{slicePoint(1000)}</S.MilidgePoint>
      <S.MilidgeUnit>M</S.MilidgeUnit>
    </S.FlexWrapper>
    <S.SelectButton>선택하기</S.SelectButton>
  </S.PageWrapper>
);

export default ShopPage;
