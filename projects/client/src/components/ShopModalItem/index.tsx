'use client';

import * as S from './style';
import { MinusIcon, PlusIcon } from 'client/assets';

import { slicePoint } from 'common';

import { ShopItemType } from 'types';

interface ShopModalItemProps {
  data: ShopItemType;
}

const ShopModalItem: React.FC<ShopModalItemProps> = ({
  data: { name, price },
}) => (
  <S.ItemWrapper>
    <S.TextBox>
      <S.ItemName>{name}</S.ItemName>
      <S.FlexBox>
        <S.PointText>{slicePoint(price)}</S.PointText>
        <S.MilidgeUnit>M</S.MilidgeUnit>
      </S.FlexBox>
    </S.TextBox>
    <S.Span />
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

export default ShopModalItem;
