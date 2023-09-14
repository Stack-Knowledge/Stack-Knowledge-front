'use client';

import * as S from './style';

import { ShopItemType } from 'types';

const ShopItem = () => (
  <S.ModalWrapper>
    <S.ModalTitle>선택하신 상품이 맞으십니까?</S.ModalTitle>
    <S.PurchusButton>구매하기</S.PurchusButton>
  </S.ModalWrapper>
);

export default ShopItem;
