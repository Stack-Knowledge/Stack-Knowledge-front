'use client';

import * as S from './style';

import Image from 'next/image';

import { ShopItemType } from 'types';

import { CheckBoxIcon, CheckedBoxIcon } from 'client/assets';

interface ShopItemProps {
  data: ShopItemType;
}

const ShopItem: React.FC<ShopItemProps> = ({ data }) => (
  <div>
    <S.ImageWrapper>
      <S.CheckBox></S.CheckBox>
      <Image src={data.image} alt={data.name} fill />
    </S.ImageWrapper>
  </div>
);

export default ShopItem;
