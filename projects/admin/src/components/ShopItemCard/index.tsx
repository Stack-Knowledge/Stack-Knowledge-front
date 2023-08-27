'use client';

import * as S from './style';

import Image from 'next/image';

import { slicePoint } from 'common';

import { OrderdItemType } from 'types';

const ShopItemCard: React.FC<OrderdItemType> = ({
  item,
  price,
  count,
  user,
}) => (
  <S.CardWrapper>
    <S.ImageWrapper>
      <Image src={item.image} alt='item image' fill />
    </S.ImageWrapper>
    <S.TextWrapper>
      <S.UserName>{user.name}</S.UserName>
      <S.Details>{count}개</S.Details>
    </S.TextWrapper>
    <S.TextWrapper>
      <S.Details>{item.name}</S.Details>
      <S.PriceWrapper>
        <S.Price>{slicePoint(price)}</S.Price>
        <S.WonText>원</S.WonText>
      </S.PriceWrapper>
    </S.TextWrapper>
  </S.CardWrapper>
);

export default ShopItemCard;
