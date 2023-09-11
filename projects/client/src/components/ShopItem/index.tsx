'use client';

import * as S from './style';

import Image from 'next/image';

import { ShopItemType } from 'types';

import { CheckBoxIcon, CheckedBoxIcon } from 'client/assets';
import { slicePoint } from 'common';

interface ShopItemProps {
  data: ShopItemType;
}

const ShopItem: React.FC<ShopItemProps> = ({ data }) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <S.CheckBox>
        <CheckedBoxIcon />
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
