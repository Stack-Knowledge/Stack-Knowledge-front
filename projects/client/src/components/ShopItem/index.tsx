'use client';

import * as S from './style';

import Image from 'next/image';

import { ShopItemType } from 'types';

interface ShopItemProps {
  data: ShopItemType;
}

const ShopItem = () => (
  <div>
    <S.ImageWrapper>
      <S.CheckBox></S.CheckBox>
      <Image />
    </S.ImageWrapper>
  </div>
);

export default ShopItem;
