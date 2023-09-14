'use client';

import * as S from './style';

import { slicePoint } from 'common';

const ShopItem = () => (
  <S.ItemWrapper>
    <S.TextBox>
      <S.ItemName>외출증</S.ItemName>
      <S.FlexBox>
        <S.PointText>{slicePoint(1000)}</S.PointText>
        <S.MilidgeUnit>M</S.MilidgeUnit>
      </S.FlexBox>
    </S.TextBox>
  </S.ItemWrapper>
);

export default ShopItem;
