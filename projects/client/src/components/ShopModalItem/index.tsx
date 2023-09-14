'use client';

import * as S from './style';
import { MinusIcon, PlusIcon } from 'client/assets';

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
    <S.Counter>
      <S.CounterContents>
        <S.PointerWrapper>
          <PlusIcon />
        </S.PointerWrapper>
        <S.CountText>{1}</S.CountText>
        <S.PointerWrapper>
          <MinusIcon />
        </S.PointerWrapper>
      </S.CounterContents>
    </S.Counter>
  </S.ItemWrapper>
);

export default ShopItem;
