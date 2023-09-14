'use client';

import * as S from './style';
import { XIcon } from 'client/assets';

import { ShopItemType } from 'types';

const ShopItem = () => (
  <S.ModalWrapper>
    <form method='dialog'>
      <S.CloseButton>
        <XIcon />
      </S.CloseButton>
    </form>
    <S.ModalTitle>선택하신 상품이 맞으십니까?</S.ModalTitle>
    <form method='dialog'>
      <S.PurchusButton>구매하기</S.PurchusButton>
    </form>
  </S.ModalWrapper>
);

export default ShopItem;
