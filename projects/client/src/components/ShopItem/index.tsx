'use client';

import Image from 'next/image';

import { CheckBoxIcon, CheckedBoxIcon } from 'client/assets';

import { slicePoint } from 'common';

import * as S from './style';

import type { ShopItemType } from 'types';

interface ShopItemProps {
  data: ShopItemType;
  // eslint-disable-next-line no-unused-vars
  onItemClick: (index: number) => void;
  index: number;
  itemStatus: boolean;
}

const ShopItem: React.FC<ShopItemProps> = ({
  data,
  onItemClick,
  index,
  itemStatus,
}) => (
  <S.Wrapper onClick={() => onItemClick(index)}>
    <S.ImageWrapper>
      <S.CheckBox>
        {itemStatus ? <CheckedBoxIcon /> : <CheckBoxIcon />}
      </S.CheckBox>
      <Image unoptimized src={data.image} alt={data.name} fill />
    </S.ImageWrapper>
    <S.ItemName>{data.name}</S.ItemName>
    <S.FlexWrapper>
      <S.MilidgePoint>{slicePoint(data.price)}</S.MilidgePoint>
      <S.MilidgeUnit>M</S.MilidgeUnit>
    </S.FlexWrapper>
  </S.Wrapper>
);

export default ShopItem;
