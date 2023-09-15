'use client';

import * as S from './style';
import { MinusIcon, PlusIcon } from 'client/assets';

import { slicePoint } from 'common';

import { ShopItemType } from 'types';

interface ShopModalItemProps {
  data: ShopItemType;
  count: number;
  calculateCount: (index: number, isPlus: boolean) => void;
  index: number;
}

const ShopModalItem: React.FC<ShopModalItemProps> = ({
  data: { name, price },
  count,
  calculateCount,
  index,
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
        <S.PointerWrapper onClick={() => calculateCount(index, true)}>
          <PlusIcon />
        </S.PointerWrapper>
        <S.CountText>{count}</S.CountText>
        <S.PointerWrapper onClick={() => calculateCount(index, false)}>
          <MinusIcon />
        </S.PointerWrapper>
      </S.CounterContents>
    </S.Counter>
  </S.ItemWrapper>
);

export default ShopModalItem;
